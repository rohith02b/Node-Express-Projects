import React from 'react'
import { AuthContext } from "../context/authContext";
import { useContext } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
 const { currentUser, logout } = useContext(AuthContext);
 return (
  <>
   <div className="auth">
    <div className="display-6">Hello {currentUser?.username}</div>
    <button className='btn btn-primary m-3'>
     {currentUser ? (
      <span onClick={() => logout(currentUser)}>Logout</span>
     ) : (
      <Link className='text-white' to="/login">
       Login
      </Link>
     )}
    </button>
   </div>
  </>
 )
}

export default Home