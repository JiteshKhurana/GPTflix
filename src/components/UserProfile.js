import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const UserProfile = () => {
    const navigate = useNavigate();
    const user = useSelector(store=>store.user);
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            navigate("/error");
        });
    }
  return (
    <div className='bg-gray-400 p-5 rounded-md absolute top-15 right-5'>
        <h1 className='text-black'>Hello {user.displayName}</h1>
        <button onClick={handleSignOut} className='p-1 m-2 h-10 text-white bg-red-600 rounded-md'>Sign Out</button>
    </div>
  )
}

export default UserProfile