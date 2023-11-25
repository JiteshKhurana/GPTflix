import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import {addUser,removeUser} from "../utils/userSlice"
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { LOGO } from '../utils/constants';
import Dropdown from './Dropdown.js';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const user = useSelector(store=>store.user);
  const [showdiv,setShowDiv] = useState(false);
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full justify-between flex'>
        <img src={LOGO} alt='logo' className='h-20'/>
        {user && <div>
          <button onClick={()=>setShowDiv(!showdiv)}><img src={user?.photoURL} alt='user-icon' className='w-11 rounded-md mt-3'/></button>
          {showdiv && <Dropdown/>}
      </div>}
    </div>
    
  )
}

export default Header