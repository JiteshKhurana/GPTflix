import React,{useState} from 'react'
import UserProfile from './UserProfile'
import { useSelector } from 'react-redux'


const Header = () => {
  const user = useSelector(store=>store.user);
  const [showdiv,setShowDiv] = useState(false);
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full justify-between flex'>
        <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' className='h-20'/>
      {user &&<div >
          <button onClick={()=>setShowDiv(!showdiv)}><img src={user?.photoURL} alt='user-icon' className='w-10 rounded-md mt-3'/></button>
          {(showdiv)? <UserProfile/>:null}
      </div>}
    </div>
    

  )
}

export default Header