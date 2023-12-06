import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Dropdown = () => {
    const navigate = useNavigate();
    const user = useSelector(store=>store.user);
    const handleSignOut=()=>{
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error");
        });
    }
    return (
        <div className="absolute top-24 right-7 bg-white rounded-lg w-44 py-2 opacity-80">
            <h1 className='text-black px-4 py-2 text-sm'>{user.displayName}</h1>
            <button onClick={handleSignOut} className='block px-4 py-2 text-sm text-black rounded-md hover:text-red-500'>Sign Out</button>
        </div>
    );
}

export default Dropdown
