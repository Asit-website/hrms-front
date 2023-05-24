import React from 'react';
import photo from "../images/Photo.png";
import kushel from "../images/kushel.png";
import path from '../images/path.png';
import { useNavigate } from 'react-router-dom';
const ForgetPassword = () => {
  const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Submit the form");
        navigate("/forget1");
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
          <div className=" flex flex-col mt-4 ">
            <label class="custom-field one">
              <input required type="text" placeholder=" " />
              <span class="placeholder">Employee Code</span>
            </label>
            <label class="custom-field one">
              <input required type="email" placeholder=" " />
              <span class="placeholder">Email Id</span>
            </label>
            </div>
            <button>Next</button>
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

export default ForgetPassword