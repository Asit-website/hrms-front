import React,{useState} from 'react';
import photo from "../images/Photo.png";
import kushel from "../images/kushel.png";
import path from '../images/path.png';
import { useMain } from '../../hooks/useMain';
import { useNavigate } from 'react-router-dom';
const ForgetPassword2 = ({setAlert}) => {
  // const { user, changePassword1 } = useMain();
  // const [value, setValue] = useState({
  //   oldPassword: '',
  //   currentPassword: '',
  //   currentPassword1: ''
  // });
  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setValue({ ...value, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // e.preventDefault();
    // console.log(value);
    // if (value.currentPassword === value.currentPassword1) {
    //   const ans = await changePassword1(value);
    //   console.log(ans);
     
        
    //     localStorage.removeItem('hrms_token');
    //     localStorage.removeItem('hrms_user');
    //     navigate('/login');
    //     alert("password changed successfully");
    // }
    // else {
    //   setAlert("error", "Password and confirm password must be same");
    // }
  };
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
          {/* <label htmlFor='oldPassword' class="custom-field one">
              <input type="text"
                          name="oldPassword"
                          onChange={handleChange}
                          value={value.oldPassword}
                          id="oldPassword"
                          className=" block w-full"
                          required
                          placeholder=" " />
              <span class="placeholder">Old Password</span>
            </label> */}
            <label htmlFor='currentPassword' class="custom-field one">
              <input  type="text"
                          // name="currentPassword"
                          // onChange={handleChange}
                          // value={value.currentPassword}
                          id="currentPassword"
                          className=" block w-full"
                          required
                          placeholder=" " />
              <span class="placeholder">New Password</span>
            </label>

            <label htmlFor='currentPassword1' class="custom-field one">
              <input   type="text"
                          // name="currentPassword1"
                          // onChange={handleChange}
                          // value={value.currentPassword1}
                          // id="currentPassword1"
                          className=" block w-full"
                          required
                          placeholder=" " />
              <span class="placeholder">Confirm Password</span>
            </label>
            
            </div>
            <button type='submit'>Sign In</button>
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