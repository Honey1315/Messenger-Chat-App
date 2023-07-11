import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {auth,db} from '../firebase'
import { signOut } from 'firebase/auth'
import {updateDoc,doc} from 'firebase/firestore'
import { useContext } from 'react'
import { AuthContext } from '../context/auth'

const Navbar = () => {
    const navigate=useNavigate();
    const {user} = useContext(AuthContext);
    const handleSignout=async()=>{
        await updateDoc(doc(db,'users',user.uid),{
            isOnline: false
        })
        await signOut(auth);
        navigate('login');
    }
  return (
    <nav>    
        <h3>
            <Link to="/">Messenger</Link>
            
        </h3>
        <div>
            {user ? (
            <>
            <Link to='/profile'>Profile</Link>
            <button className='btn' onClick={handleSignout}>Logout</button>
            </> ): (
            <>
            <Link to='/register'>Register</Link>
            <Link to='/login'>LogIn</Link>
            </>
            )
            }
        </div>

    </nav>
  )
}

export default Navbar