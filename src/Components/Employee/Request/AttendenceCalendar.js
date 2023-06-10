import React,{useState} from 'react';
import EmployeeNavbar from "../Navbar/EmployeeNavbar";
import EmployeeSidebar from "../Sidebar/EmployeeSidebar";
import { useMain } from '../../../hooks/useMain';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const AttendenceCalendar = ({setAlert}) => {
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
          />
          <div className="em">
            <div className="flex-col">
                <div className='distinguish flex'>
                    <div className="distinguish1 w-full">
                    <div className="calend calend1">
                    <div className="calend-head">
                      <h2>Attendances Calendrer</h2>
                      <p>See all</p>
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
                                    <div className="clock1 flex">
                                        <h2>07 : 35</h2>
                                        <p>Pm</p>
                                    </div>
                                </div>
                                <div className="clock">
                                    <h3>Clock In</h3>
                                    <div className="clock1 flex">
                                        <h2>07 : 35</h2>
                                        <p>Pm</p>
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