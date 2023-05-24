import React from 'react'
import kushel1 from '../../images/kushel1.png';
import thir from '../../images/thir.png';
import lok from '../../images/lok.png';
import bottom from '../../images/bottom.png';
import bell from '../../images/bell.png';
const EmployeeNavbar = () => {
  return (
    <>
        <div className="Employee-nav w-full">
            {/* <div className="logo ">
                <img src={kushel1} alt="" />
            </div> */}
            <div className="second-logo flex items-center">
                 <img src={thir} alt="" />
                 <p className='ml-2'>Good Morning John</p>
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
            <div className="sixth-logo flex items-center ">
                <img className='john' src={lok} alt="lok" />
                <p className='ml-2.5'>John Deo</p>
                <img className='ml-2.5 bottom' src={bottom} alt="bottom" />
            </div>
        </div>
     
    </>
  )
}

export default EmployeeNavbar