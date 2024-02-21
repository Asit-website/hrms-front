import React, { useState, useEffect } from "react";
import EmployeeNavbar from "../Navbar/EmployeeNavbar";
import EmployeeSidebar from "../Sidebar/EmployeeSidebar";
import bret from "../../images/bret.png";
import plus from "../../images/plus.png";
import punjabi from "../../images/punjabi.png";
import nancy from "../../images/nancy.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useMain } from "../../../hooks/useMain";
import goals from "../../images/goals.png";
import arrow from "../../images/arrow.png";
import { NavLink } from "react-router-dom";
import akash from '../../images/akash.png';
import timer1 from "../../images/timer.png";

var tc;
var tc2;
var tc3;
var tc4;

const EmployeeDash = ({ setAlert, pop1, setPop1 }) => {
  // =================punch in punch out concept==========
  const { user, postActivity, getStatisticsByUser } = useMain();

  const [startTs, setStartTs] = useState("");
  var [percentageDone, setPercentageDone] = useState(0);

  var [timer, setTimer] = useState(0);

  var [progressTimer, setProgressTimer] = useState(0);

  var [breakTimer, setBreakTimer] = useState(0);

  var [overTimeTimer, setOverTimeTimer] = useState(0);

  const [punchLog, setPunchLog] = useState({});
  const [punchFlag, setPunchFlag] = useState(false);
  const [statistics, setStatistics] = useState([]);

  // ==============other===========================
  const [value, onChange] = useState(new Date());
  const [gen, setGen] = useState([]);
  const [flag, setFlag] = useState();

  const getStatistics = async () => {
    const ans = await getStatisticsByUser();
    // console.log(ans);
    setStatistics(ans.data);
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const punchBtn = async (e) => {
    if (e.target.innerText === "Punch In") {
      e.target.innerText = "Punch Out";
      clearInterval(tc2);

      if (startTs === "") {
        setStartTs(new Date().getTime());
      }

      tc = setInterval(() => {
        if (progressTimer === 480) {
          setOverTimeTimer(++overTimeTimer);
        } else {
          setTimer(++timer);
          setProgressTimer(++progressTimer);
          setPercentageDone((progressTimer / 480) * 100);
        }
      }, 60 * 1000);
      // }, 5 * 1000);

      let status = "ONLINE";
      let date = `${new Date().getDate()}/${new Date().getMonth() + 1
        }/${new Date().getFullYear()}`;
      // console.log(date);
      let activity = {
        type: "PUNCH_IN",
        ts: new Date().getTime(),
      };

      let tempActivity = localStorage.getItem("tempActivity");
      if (tempActivity) {
        tempActivity = JSON.parse(tempActivity);
        if (!tempActivity[new Date().getDate()]) {
          // new day
          localStorage.removeItem("tempActivity");
          tempActivity = { [new Date().getDate()]: [] };
        }
      } else {
        tempActivity = { [new Date().getDate()]: [] };
      }

      tempActivity[new Date().getDate()].push(activity);
      localStorage.setItem("tempActivity", JSON.stringify(tempActivity));

      setPunchFlag(!punchFlag);

      const ans = await postActivity({
        date,
        activity,
        breaks: breakTimer,
        overtime: overTimeTimer,
        hours: timer,
        status,
      });
      console.log(ans);
    } else {
      e.target.innerText = "Punch In";
      clearInterval(tc);

      tc2 = setInterval(() => {
        setBreakTimer(++breakTimer);
      }, 60 * 1000);

      let status = "OFFLINE";
      let date = `${new Date().getDate()}/${new Date().getMonth() + 1
        }/${new Date().getFullYear()}`;
      let activity = {
        type: "PUNCH_OUT",
        ts: new Date().getTime(),
      };

      let tempActivity = JSON.parse(localStorage.getItem("tempActivity"));
      if (!tempActivity[new Date().getDate()]) {
        localStorage.removeItem("tempActivity");
      } else {
        tempActivity[new Date().getDate()].push(activity);
      }
      localStorage.setItem("tempActivity", JSON.stringify(tempActivity));

      setPunchFlag(!punchFlag);

      const ans = await postActivity({
        date,
        activity,
        breaks: breakTimer,
        overtime: overTimeTimer,
        hours: timer,
        status,
      });
      console.log(ans);
    }
  };

  // ==========to get user data================
  useEffect(() => {
    // getData();
  }, []);

  const getData = async () => { };

  var [clock, setClock] = useState(0);
  var [breakClock, setBreakClock] = useState(0);

  useEffect(()=>{
    let t=localStorage.getItem('clock-in');
    let t1=localStorage.getItem('clock-status');
    let t2=localStorage.getItem('break-seconds');
    if(t1 && t1!=="out")
    {
      let t5=new Date().getTime()-t
      setClock(t5);
      if(t2)
      {
        setBreakClock(t2);
      }

      tc4=setInterval(() => {
        // setClock(++clock);
        setClock(++t5);
      }, 1000);

      if(t1==='resume')
      {
        tc3=setInterval(() => {
          setBreakClock(++t2);
        }, 1000);
        // setBreakClock(++breakClock);
      }
    }
  }, []);

  const clockIn = () => {
    let t = localStorage.getItem('clock-status');
    if (!t) {
      localStorage.setItem('clock-in', new Date().getTime());
      localStorage.setItem('clock-status', 'break');
      tc4=setInterval(() => {
        setClock(++clock);
      }, 1000);
    }
    else {
      if (t === 'break') {
        localStorage.setItem('break-time', new Date().getTime());
        localStorage.setItem('clock-status', 'resume');
        clearInterval(tc3);
        let t3=localStorage.getItem('break-seconds');

        tc3=setInterval(() => {
          setBreakClock(++t3);
        }, 1000);
      }
      else if (t === 'resume') {
        let t1=localStorage.getItem('break-time');
        if(t1)
        {
          localStorage.setItem('break-seconds', new Date()-t1);
        }
        localStorage.setItem('clock-status', 'break');
        clearInterval(tc3);
      }
      else if(t==="out")
      {
        localStorage.setItem('clock-in', new Date().getTime());
        localStorage.setItem('clock-status', 'break');
        localStorage.removeItem('break-seconds');
        localStorage.removeItem('break-time');
        tc4=setInterval(() => {
          setClock(++clock);
        }, 1000);
        // clearInterval(tc3);
        // clearInterval(tc4);
      }
    }
  };

  const clockOut = () => {
    localStorage.setItem('clock-status', 'out');
    clearInterval(tc3);
    clearInterval(tc4);
  };

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
            pop1={pop1}
            setPop1={setPop1}
          />

          <div className="em">
            <div className="flex-col">
              <div className="bedge">
                <div className="first-bedge w-full ">
                  {/* <div className="bret">
                    <div className="give flex items-center">
                      <img className="btr" src={bret} alt="" />
                      <p className="ml-3">Give a Badge</p>
                    </div>
                    <div className="give1">
                      <img className="plus" src={plus} alt="" />
                    </div>
                  </div> */}
                  <div className="attend-ctiveWrapempp">
                    <div className="celeberation w-full">
                      <div className="cel-head">
                        <h3>Today's celebrations</h3>
                        <p>See all</p>
                      </div>
                      <div className="cel-card">
                        <div className="cel-box">
                          <div className="cel-boxing">
                            <div className="cel-boxing1">
                              <img src={punjabi} alt="" />
                            </div>
                            <div className="cel-boxing2 ml-4 mt-4">
                              <h2>Steve wills</h2>
                              <p>Assistant manager</p>
                              <button>Wish Birthday</button>
                            </div>
                          </div>
                        </div>
                        <div className="cel-box ml-5">
                          <div className="cel-boxing">
                            <div className="cel-boxing1">
                              <img src={punjabi} alt="" />
                            </div>
                            <div className="cel-boxing2 ml-4 mt-4">
                              <h2>Steve wills</h2>
                              <p>Assistant manager</p>
                              <button>Wish Birthday</button>
                            </div>
                          </div>
                        </div>
                        {/* <div className="cel-box ml-5">
                        <div className="cel-boxing">
                          <div className="cel-boxing1">
                            <img src={punjabi} alt="" />
                          </div>
                          <div className="cel-boxing2 ml-4 mt-4">
                            <h2>Steve wills</h2>
                            <p>Assistant manager</p>
                            <button>Wish Birthday</button>
                          </div>
                        </div>
                      </div> */}
                      </div>
                    </div>

                    <div className="hrmActRight55">
                      <div className="markAttWrap55">
                        <div className="markAtt55">
                          <p>Mark Attandance</p>
                          <img src={timer1} alt="" />
                        </div>

                        <hr />

                        <div className="myOficeWrap55">
                          <p className="myOfText55">My Office Time: 10:00 to 19:00</p>

                          <div className="oficTime55">
                            <div className="ofSin55">
                              <div className="singlTime55">
                                <p>{Math.floor(Math.floor(clock / 1000) / 3600)}</p>
                              </div>
                              <p className="day55">Hours</p>
                            </div>

                            <div className="ofSin55">
                              <div className="singlTime55">
                                <p>{Math.floor((Math.floor(clock / 1000) % 3600) / 60)}</p>
                              </div>
                              <p className="day55">Minutes</p>
                            </div>

                            <div className="ofSin55">
                              <div className="singlTime55">
                                <p>{Math.floor(clock / 1000) % 60}</p>
                              </div>

                              <p className="day55">Seconds</p>
                            </div>
                          </div>

                          <div className="clockINOUTBtn55">
                            <button className="clockIN55" onClick={clockIn}>
                              <span>Clock In</span>
                            </button>
                            <button className="clockOUT55" onClick={clockOut}>
                              <span>Clock Out</span>
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  {/* <div className="new-joiner">
                    <h3>
                      Welcome Onboard
                      <span className="ml-2">(May 12, 2023)</span>
                    </h3>
                    <div className="hr">
                      <hr className="hr1" />
                    </div>
                    <div className="joiners flex items-center justify-between">
                      <div className="joiners1">
                        <img src={nancy} alt="" />
                        <h2>Nancy wills</h2>
                        <p>Assistant manager</p>
                        <div className="cheers mt-5">
                          <div className="cheers1 flex">
                            <i class="fa-solid fa-champagne-glasses"></i>
                            <p className="ml-1">Cheer22</p>
                          </div>
                          <div className="cheer2 flex">
                            <i class="fa-solid fa-comment"></i>
                            <p className="ml-1">Comment</p>
                          </div>
                        </div>
                      </div>
                      <div className="joiners2">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing.
                        </p>
                      </div>
                    </div>
                  </div> */}
                  <div className="metting_div_surbhi">
                    <div className="second-bedge w-full ">
                      <div className="calend falend">
                        <div className="calend-head">
                          <h2>Meetings & more</h2>
                          <img src={goals} alt="goals" />
                        </div>
                        <hr />
                        <div className="cals-dent relative">
                          <NavLink to="/employeeDash/atten">
                            <img width={12} src={arrow} alt="arrow" />
                          </NavLink>
                          <Calendar onChange={onChange} value={value} />
                        </div>
                        {/* <div className="distinguish-fard">
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

                        <div className="show-all">
                          <p className="text-center">Show all meetings and Interviews</p>
                        </div> */}
                      </div>
                    </div>
                    <div>

                      <a href="#" class="block max-w-2xl p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 class="mb-3 text-xl  tracking-tight text-gray-900 dark:text-white">Time Log</h5>
                        <hr />
                        <h5 class="mb-3 mt-3 text-xl  tracking-tight text-gray-900 dark:text-white">Today</h5>
                        <hr />
                        <div className="time_emp_desh_flex">
                          <div className="time_emp_desh">
                            <h5 class="mb-1 mt-3 text-xl  tracking-tight text-gray-900 dark:text-white">00:00</h5>
                            <p>Scheduled</p>
                          </div>
                          <div className="time_emp_desh">
                            <h5 class="mb-1 mt-3 text-xl  tracking-tight text-gray-900 dark:text-white">00:00</h5>
                            <p>Worked</p>
                          </div>
                          <div className="time_emp_desh">
                            <h5 class="mb-1 mt-3 text-xl  tracking-tight text-gray-900 dark:text-white">00:00</h5>
                            <p>brack</p>
                          </div>
                          <div className="time_emp_desh">
                            <h5 class="mb-1 mt-3 text-xl  tracking-tight text-gray-900 dark:text-white">00:00</h5>
                            <p>balance</p>
                          </div>
                        </div>
                        <h5 class="mb-3 mt-3 text-xl  tracking-tight text-gray-900 dark:text-white">This month</h5>
                        <hr />
                        <div className="time_emp_desh_flex2">
                          <div className="time_emp_desh">
                            <div class="mt-5">
                              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="50" rx="4" fill="#0B60FF" />
                              </svg>

                            </div>

                          </div>
                          <div className="time_emp_desh">
                            <h5 class=" mt-5 text-xl font-bold  tracking-tight text-gray-900 dark:text-white">168 h</h5>
                            <p>Total schedule time</p>
                          </div>

                        </div>
                        {/* <div class="mb-1 text-lg font-medium dark:text-white">Worked time - 116 h</div>
                        <div class="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                          <div class="h-4 bg-blue-600 rounded-full dark:bg-blue-500" style="width: 45%"></div>
                        </div>
                        <div class="mb-1 text-lg font-medium dark:text-white">Over time - 116 h</div>
                        <div class="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                          <div class="h-4 bg-blue-600 rounded-full dark:bg-blue-500" style="width: 45%"></div>
                        </div> */}
                      </a>
                    </div>


                  </div>
                  <div className="hrLefThi22">
                    <div class="leaves_request_emp">
                      <h2>Leaves</h2>
                      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-4  mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">create leave</button>
                    </div>
                    <hr />
                    <div className="leave_setion_emp">
                      <div className="totel_leave_allowance1">
                        <div>
                          <h5 class="mb-1 text-xl  tracking-tight text-gray-900 dark:text-white">15</h5>
                          <p>Total leave allowance</p>
                        </div>
                        <div>
                          <p> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="18" rx="2" fill="#019AFF" />
                          </svg><span> casual - 07</span></p>
                          <p><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="18" rx="2" fill="#46C35F" />
                          </svg>
                            <span>Sick - 08</span> </p>
                        </div>
                      </div>
                      <div className="totel_leave_allowance1">
                        <div>
                          <h5 class="mb-1 text-xl  tracking-tight text-gray-900 dark:text-white">15</h5>
                          <p>Total leave taken</p>
                        </div>
                        <div>
                          <p> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="18" rx="2" fill="#019AFF" />
                          </svg><span> casual - 07</span></p>
                          <p><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="18" rx="2" fill="#46C35F" />
                          </svg>
                            <span>Sick - 08</span> </p>
                        </div>
                      </div>
                    </div>
                    <div className="leave_setion_emp">
                      <div className="totel_leave_allowance1">
                        <div>
                          <h5 class="mb-1 text-xl  tracking-tight text-gray-900 dark:text-white">15</h5>
                          <p>Total leave available</p>
                        </div>
                        <div>
                          <p> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="18" rx="2" fill="#019AFF" />
                          </svg><span> casual - 07</span></p>
                          <p><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="18" rx="2" fill="#46C35F" />
                          </svg>
                            <span>Sick - 08</span> </p>
                        </div>
                      </div>
                      <div className="totel_leave_allowance1">
                        <div>
                          <h5 class="mb-1 text-xl  tracking-tight text-gray-900 dark:text-white">15</h5>
                          <p>Total request pending</p>
                        </div>
                        <div>
                          <p> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="18" rx="2" fill="#019AFF" />
                          </svg><span> casual - 07</span></p>
                          <p><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="18" rx="2" fill="#46C35F" />
                          </svg>
                            <span>Sick - 08</span> </p>
                        </div>
                      </div>
                    </div>


                  </div>
                  <div className="hrLefThi">

                    <h2>Announcement Lists</h2>

                    <div class="relative overflow-x-auto">
                      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs uppercase textALLtITL ">
                          <tr  >
                            <th scope="col" class="px-6 py-3 taskTitl">
                              TITLE
                            </th>
                            <th scope="col" class="px-2 py-3 taskTitl">
                              START DATE
                            </th>
                            <th scope="col" class="px-6 py-3 taskTitl">
                              END DATE
                            </th>

                            <th scope="col" class="px-6 py-3 taskTitl">
                              DESCRIPTION
                            </th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr class="bg-white border-b  ">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap taskAns ">
                              WORK FROM HOME
                            </th>
                            <td class="px-2 py-4 taskAns">
                              JAN 22,2024
                            </td>
                            <td class="px-6 py-4 taskAns">
                              JAN 22,2024
                            </td>
                            <td class="px-6 py-4 taskAns">
                              AYODHYA RAM MANDIR
                            </td>

                          </tr>

                          <tr class="bg-white border-b  ">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap taskAns ">
                              WORK FROM HOME
                            </th>
                            <td class="px-2 py-4 taskAns">
                              JAN 22,2024
                            </td>
                            <td class="px-6 py-4 taskAns">
                              JAN 22,2024
                            </td>
                            <td class="px-6 py-4 taskAns">
                              AYODHYA RAM MANDIR
                            </td>

                          </tr>

                          <tr class="bg-white border-b  ">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap taskAns ">
                              WORK FROM HOME
                            </th>
                            <td class="px-2 py-4 taskAns">
                              JAN 22,2024
                            </td>
                            <td class="px-6 py-4 taskAns">
                              JAN 22,2024
                            </td>
                            <td class="px-6 py-4 taskAns">
                              AYODHYA RAM MANDIR
                            </td>

                          </tr>


                        </tbody>
                      </table>
                    </div>


                  </div>
                </div>
                {/* <div className="second-bedge w-full ">
                  <div className="calend falend">
                    <div className="calend-head">
                      <h2>Meetings & more</h2>
                      <img src={goals} alt="goals" />
                    </div>
                    <hr />
                    <div className="cals-dent relative">
                      <NavLink to="/employeeDash/atten">
                        <img width={12} src={arrow} alt="arrow" />
                      </NavLink>
                      <Calendar onChange={onChange} value={value} />
                    </div>
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

                    </div>

                    <div className="show-all">
                      <p className="text-center">Show all meetings and Interviews</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>




        </div>
      </div>
    </>
  );
};

export default EmployeeDash;
