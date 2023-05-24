import React from 'react';
import photo from "../images/Photo.png";
import kushel from "../images/kushel.png";
import path from '../images/path.png';
const ForgetPassword2 = () => {
    const handleSubmit = () =>{
        console.log("hi")
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
        <h2>Create new password</h2>
        <p className="mt-4">
          This is a secure system and you will need to provide your login
          details to access the site.
        </p>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
          <div className=" flex flex-col mt-4 ">
            <label class="custom-field one">
              <input required type="text" placeholder=" " />
              <span class="placeholder">New Password</span>
            </label>
            <label class="custom-field one">
              <input required type="password" placeholder=" " />
              <span class="placeholder">Confirm Password</span>
            </label>
            
            </div>
            <button>Sign In</button>
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

export default ForgetPassword2