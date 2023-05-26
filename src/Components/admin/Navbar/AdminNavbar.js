import React from 'react'
import kushel1 from '../../images/kushel1.png';
import thir from '../../images/thir.png';
import lok from '../../images/lok.png';
import bottom from '../../images/bottom.png';
import bell from '../../images/bell.png';
import OutsideClickHandler from "react-outside-click-handler";
const AdminNavbar = ({setAlert,user}) => {
    const updateUser = () =>{
        document.getElementById("ty").classList.toggle("tys");
     }
     const handleLogout = () =>{
         localStorage.removeItem('hrms_token');
         localStorage.removeItem('hrms_user');
         window.location.href = "/login";
         setAlert("success", "logout successfully");
     }
  return (
    <>
        <div className="Employee-nav w-full">
            {/* <div className="logo ">
                <img src={kushel1} alt="" />
            </div> */}
            <div className="second-logo flex items-center">
                 <img src={thir} alt="" />
                 <p className='ml-2'>Good Morning {user?.fullName}</p>
            </div>
            <div className="third-logo ">
                <input type="search" placeholder='Search for actions, pages, requests, report* people...' />
            </div>
            <div className="fourth-logo ">
                <button>Clock In</button>
            </div>
            <div className="fifth-logo ">
                <img src={bell} alt="" />
            </div>

            <OutsideClickHandler
              onOutsideClick={()=>{
                document.getElementById("ty").classList.remove("tys") && document.getElementById("ty").classList.add("kys") 
              }}
            >
            <div className='relative cursor-pointer' onClick={updateUser}>
            <div className="sixth-logo flex items-center relative ">
                <img className='john' src={lok} alt="lok" />
                <p className='ml-2.5'>{user?.fullName}</p>
                <img className='ml-2.5 bottom' src={bottom} alt="bottom" />
            </div>
               <div id='ty' className='bg-white w-40 absolute user-profile hidden'>
                    <p onClick={handleLogout} className=' text-center'>Logout</p>
                    <p className=' text-center'>Edit Profile</p>
               </div>
            </div>
            </OutsideClickHandler>
        </div> 
    </>
  )
}

export default AdminNavbar