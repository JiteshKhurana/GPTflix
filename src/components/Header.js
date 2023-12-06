import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import {addUser,removeUser} from "../utils/userSlice"
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { LOGO } from '../utils/constants';
import Dropdown from './Dropdown.js';
import { toggleGptSearchView } from '../utils/gptSlice.js';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changelanguage } from '../utils/appConfigSlice.js';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const showGptSearch = useSelector(store=>store?.gpt?.showGptSearch);
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    return ()=>unsubscribe();
  },[])
  const [showdiv,setShowDiv] = useState(false);

  const handleGPTSearchClick=()=>{
      dispatch(toggleGptSearchView());
  }

  const handleLangChange=(e)=>{
    dispatch(changelanguage(e.target.value));
}
  
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full justify-between flex'>
        <img src={LOGO} alt='logo' className='h-20'/>
        
        {user && <div className='flex align-middle mt-2'>
          {showGptSearch && <select className='h-12 text-md px-3 py-1 my-3 text-white bg-gray-500 rounded-md ' onChange={handleLangChange}>
                {SUPPORTED_LANGUAGES.map((lang)=><option key={lang.id} value={lang.id} onClick={(e)=>console.log(e)}>{lang.name}</option>)}
          </select>}
          <button onClick={handleGPTSearchClick} className='h-12 text-md px-2 py-1 m-3 text-white bg-blue-400 rounded-md hover:bg-opacity-80'>{showGptSearch?'HomePage':'AI Search'}</button>
          <button onClick={()=>setShowDiv(!showdiv)}><img src={user?.photoURL} alt='user-icon' className='h-12 rounded-md'/></button>
          {showdiv && <Dropdown/>}
      </div>}
    </div>
    
  )
}

export default Header