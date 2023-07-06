import React from "react";
import kushel1 from "../../images/kushel1.png";
import thir from "../../images/thir.png";
import lok from "../../images/lok.png";
import bottom from "../../images/bottom.png";
import bell from "../../images/bell.png";
import OutsideClickHandler from "react-outside-click-handler";
import { NavLink } from "react-router-dom";
const AdminNavbar = ({ setAlert, user }) => {
  const updateUser = () => {
    document.getElementById("ty").classList.toggle("tys");
  };
  const handleLogout = () => {
    localStorage.removeItem("hrms_token");
    localStorage.removeItem("hrms_user");
    window.location.href = "/login";
    setAlert("success", "logout successfully");
  };

  // ===============logic for good morning, good afternoon and evening accorroding to time====
  let myDate = new Date();
  let hours = myDate.getHours();
  let greet;

  if (hours < 12) greet = "Morning";
  else if (hours >= 12 && hours <= 17) greet = "Afternoon";
  else if (hours >= 17 && hours <= 24) greet = "Evening";


  return (
    <>
      <div className="Employee-nav w-full">
        <div className="logo ">
          <img src={kushel1} alt="" />
        </div>
        <div className="second-logo flex items-center">
          <img src={thir} alt="" />
          <p className="ml-2">Good {greet} {user?.fullName}</p>
        </div>
        <div className="third-logo ">
          <input type="search" placeholder="Search" />
        </div>
        {/* <div className="fourth-logo ">
                <button>Clock In</button>
            </div> */}
        <div className="fifth-logo ">
          <img src={bell} alt="" />
        </div>

        <OutsideClickHandler
          onOutsideClick={() => {
            document.getElementById("ty").classList.remove("tys") &&
              document.getElementById("ty").classList.add("kys");
          }}
        >
          <div className="relative cursor-pointer" onClick={updateUser}>
            <div className="sixth-logo flex items-center relative ">
              <img className="john" src={lok} alt="lok" />
              <p className="ml-2.5">{user?.fullName}</p>
              <img className="ml-2.5 bottom" src={bottom} alt="bottom" />
            </div>
            <div id="ty" className="bg-white w-40 absolute user-profile hidden">
              <p onClick={handleLogout} className=" text-center">
                Logout
              </p>
              <NavLink to="/adminDash/profile">
                <p className=" text-center">Edit Profile</p>
              </NavLink>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </>
  );
};

export default AdminNavbar;
