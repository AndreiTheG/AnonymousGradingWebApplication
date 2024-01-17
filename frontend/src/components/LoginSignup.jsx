import React from 'react'
import './LoginSignup.css'
import { useState } from 'react'

import user_icon from '../components/Assets/person.png'
// import user_icon from '../Assets/person.png'
import email_icon from '../components/Assets/email.png'
import password_icon from '../components/Assets/password.png'
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {

    //const navigate = useNavigate(); // Utilizează useNavigate în loc de useHistory

    const [action, setAction] = useState("Login");   
    const [isVisible, setIsVisible] = useState(true); 

    // const handleLoginClick = () => {
    // // Adaugă aici orice altă logică de autentificare

    // // Navighează către pagina ProiectForm
    // navigate('/proiectForm');
  //};
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
        <div></div>
) : (
  <>
    <div className="input">
      <img alt="" />
      <input type="text" placeholder="Name" />
    </div>
    <div className="input">
      <img alt="" />
      <input type="text" placeholder="Year" />
    </div>
    <div className="input">
      <img src={email_icon} alt="" />
      <input type="text" placeholder="Group" />
    </div>
    <div className="input">
      <img src={email_icon} alt="" />
      <input type="text" placeholder="Role" />
    </div>
  </>
)}

            <div className="input">
             <img src={email_icon} alt="" />   
             <input type="email" placeholder="Email Id" />
            </div><div className="input">
             <img src={password_icon} alt="" />   
             <input type="password" placeholder="Password" />
            </div>
        </div>
        {action==="Sign Up"?<div></div>:      <div className="forgot-password">Lost Password?<span>Click Here!</span></div>}
  
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
} 

export default LoginSignup
