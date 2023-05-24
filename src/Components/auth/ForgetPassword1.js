import React from 'react'
import photo from "../images/Photo.png";
import kushel from "../images/kushel.png";
import path from '../images/path.png';
import { useNavigate } from 'react-router-dom';
const ForgetPassword1 = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("hi");
        navigate("/forget2");
    }
  return (
    <div className="auth">
    <div className="login-page">
      <div className="login-page1">
        <img className="path6" src={path} alt="path" />
        <img className="kushel-logo" src={kushel} alt="" />
        <img src={photo} alt="photo" />
      </div>
      <div className="login-page2">
        <h2>Forget Password</h2>
        <p className="mt-4">
          This is a secure system and you will need to provide your login
          details to access the site.
        </p>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
          <div className=" flex justify-between otp-verify mt-4 ">
               <input required className='otp' type="text" maxLength="1" />
               <input required className='otp otp1' type="text" maxLength="1" />
               <input required className='otp otp1' type="text" maxLength="1" />
               <input required className='otp otp1' type="text" maxLength="1" />
            </div>
            <button className='next-btn'>Next</button>
            <div className="sign-information">
                <p>Powered by <span>KusheldigiSolutions</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ForgetPassword1