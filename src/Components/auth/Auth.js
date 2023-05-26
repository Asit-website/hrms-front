import React, { useState } from "react";
import photo from "../images/Photo.png";
import kushel from "../images/kushel.png";
import path from "../images/path.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useMain } from "../../hooks/useMain";
const Auth = (props) => {
  const { login, hrLogin, setUser, employeeLogin, adminLogin } = useMain();
  const navigate = useNavigate();
  var [value, setValue] = useState({
    email: "",
    password: "",
  });
 

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let ans = await login(value);
    if (ans.success) {
      setUser(ans.user);
      localStorage.setItem("hrms_user", JSON.stringify(ans.user));
      localStorage.setItem(
        "hrms_token",
        JSON.stringify({
          token: ans.token,
          // rememberMe: document.getElementById('remember').checked,
          // expiry: new Date().getTime() + 24 * 60 * 60 * 1000
        })
      );

      props.setAlert("success", ans.message);

      if (ans.user.role === "HR") {
        navigate("/hrDash");
      } else if (ans.user.role === "EMPLOYEE") {
        navigate("/employeeDash");
      } else {
        navigate("/adminDash");
      }
    } else {
      props.setAlert("error", ans.message);
    }
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
          <h2>Login Accout</h2>
          <p className="mt-4">
            This is a secure system and you will need to provide your login
            details to access the site.
          </p>
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div className=" flex flex-col mt-4 ">
                <label class="custom-field one">
                  <input
                    required
                    name="email"
                    onChange={handleChange}
                    value={value.email}
                    type="email"
                    placeholder=" "
                  />
                  <span class="placeholder">Email</span>
                </label>
                <label class="custom-field one">
                  <input
                    required
                    name="password"
                    onChange={handleChange}
                    value={value.password}
                    type="password"
                    placeholder=" "
                  />
                  <span class="placeholder">Password</span>
                </label>
                {/* <div className="flex items-start mt-4 mb-6">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                                </div>
                                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember Me</label>
                            </div> */}
                <NavLink to="/forget">
                  <p className=" text-right  forget">Forgot password?</p>
                </NavLink>
              </div>
              <button>Sign In</button>
              <div className="sign-information">
                <p>
                  Powered by{" "}
                  <a href="http://www.kusheldigi.com/">
                    <span>KusheldigiSolutions</span>
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
