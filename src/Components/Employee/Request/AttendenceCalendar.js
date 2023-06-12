import React,{useState} from 'react';
import EmployeeNavbar from "../Navbar/EmployeeNavbar";
import EmployeeSidebar from "../Sidebar/EmployeeSidebar";
import { useMain } from '../../../hooks/useMain';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import akash from '../../images/akasha.png'
const AttendenceCalendar = ({setAlert,pop1,setPop1}) => {
  const { user, postActivity, getStatisticsByUser } = useMain();
  const [value, onChange] = useState(new Date());
  return (
     <>
          <div className="employee-dash h-full">
        <EmployeeSidebar />
        <div className="tm">
          <EmployeeNavbar
            user={user}
            setAlert={setAlert}
            postActivity={postActivity}
            getStatisticsByUser={getStatisticsByUser}
            pop1={pop1} setPop1 = {setPop1}
          />
          <div className="em">
            <div className="flex-col">
                <div className='distinguish flex'>
                    <div className="distinguish1 w-full">
                    <div className="calend calend1">
                    <div className="calend-head">
                      {/* <h2>Attendances Calendrer</h2>
                      <p>See all</p> */}
                    </div>
                    <Calendar onChange={onChange} value={value} />
                  </div>
                    </div>
                    <div className="distinguish2 w-full">
                         <div className="total-timeCal">
                            <h2 className='total'>Total Time</h2>
                            <hr />
                            <div className='clock-system'>
                                <div className="clock">
                                    <h3>Clock In</h3>
                                    <div className="clock1 flex items-center">
                                        <h2>07 : 35</h2>
                                        <p>Pm</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="clock clock2">
                                    <h3>Clock In</h3>
                                    <div className=" clock1 flex items-center">
                                        <h2>07 : 35</h2>
                                        <p>Pm</p>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                    <div className="distinguish3 w-full">
                         <div className="distinguish-varding">
                             <h3 className='sasks'>Tasks</h3>
                             <hr />
                             <div className="distinguish-fard">
                                <div className="distinguish-box">
                                    <img src={akash} alt="akash" />
                                    <div className='akash'>
                                       <h3>Interview with Akash Negi</h3>
                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                       <h4>12:30  June 12,2022</h4>
                                    </div>
                                </div>
                                <div className="distinguish-box">
                                    <img src={akash} alt="akash" />
                                    <div className='akash'>
                                       <h3>Interview with Akash Negi</h3>
                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                       <h4>12:30  June 12,2022</h4>
                                    </div>
                                </div>
                                <div className="distinguish-box">
                                    <img src={akash} alt="akash" />
                                    <div className='akash'>
                                       <h3>Interview with Akash Negi</h3>
                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                       <h4>12:30  June 12,2022</h4>
                                    </div>
                                </div>
                                <div className="distinguish-box">
                                    <img src={akash} alt="akash" />
                                    <div className='akash'>
                                       <h3>Interview with Akash Negi</h3>
                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                       <h4>12:30  June 12,2022</h4>
                                    </div>
                                </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
     </>
  )
}

export default AttendenceCalendar