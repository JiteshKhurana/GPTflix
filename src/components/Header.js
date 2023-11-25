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


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
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
  
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full justify-between flex'>
        <img src={LOGO} alt='logo' className='h-20'/>
        {user && <div className='flex align-middle  mt-2'>
          <button onClick={handleGPTSearchClick} className='h-12 text-md px-2 py-1 m-3 text-white bg-blue-400 rounded-md hover:bg-opacity-80'>GPT Search</button>
          <button onClick={()=>setShowDiv(!showdiv)}><img src={user?.photoURL} alt='user-icon' className='h-12 rounded-md'/></button>
          {showdiv && <Dropdown/>}
      </div>}
    </div>
    
  )
}

export default Header