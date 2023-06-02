import React from "react";
import HrSidebar from "../Sidebar/HrSidebar";
import HrNavbar from "../Navbar/HrNavbar";
import tanj from '../../images/tanj.png';
const HrDashboard = ({setAlert}) => {
  return (
    <>
      <div className="employee-dash h-full">
        <HrSidebar setAlert={setAlert} />
        <div className="tm">
          <HrNavbar setAlert={setAlert} />
          <div className="em">
            <div className="flex-col">
                <div className="hrDash-status">
                    <div className="hrDash-status1">
                         <div className="hrStatus w-full">
                             <div className="hrStatus1">
                                 <div className="status-box">
                                      <div className="status-sox flex items-center justify-between">
                                          <h3>Candidate Status</h3>
                                          <img src={tanj} alt="tanj" />
                                      </div>
                                      <hr className="mt-3" />
                                      <div className="status-months flex-start flex  justify-between mt-3">
                                         <div className="status-months1">
                                             <h5>Total Onboarding</h5>
                                             <h2>156</h2>
                                         </div>
                                         <div className="status-months2">
                                             <select name="" id="">
                                                <option>Month</option>
                                             </select>
                                         </div>
                                      </div>
                                 </div>
                             </div>
                             <div className="hrStatus2">
                                 
                             </div>
                         </div>
                    </div>
                    <div className="hrDash-status2">

                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HrDashboard;
