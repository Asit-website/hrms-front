import AdminNavbar from "../../admin/Navbar/AdminNavbar";
import AdminSidebar from "../../admin/Sidebar/AdminSidebar";
import "react-calendar/dist/Calendar.css";
import { useMain } from "../../../hooks/useMain";
import HrSidebar from "../../Hr/Sidebar/HrSidebar";
import HrNavbar from "../../Hr/Navbar/HrNavbar";
import chevron from "../../images/chevron_right.png";
import ac1 from "../../images/ac1.png";
import ac2 from "../../images/ac2.png";
import ac3 from "../../images/ac3.png";
import ac4 from "../../images/ac4.png";
import timer from "../../images/timer.png";
import MagnifyingGlass from "../../images/MagnifyingGlass.png"
import calendarMonth from "../../images/calendar_month.png"
import "./hrm.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const activeData = [
  {
    img: ac1,
    title1: "Active",
    title2: "Employees",
    num: "18",
    link: "/adminDash/HRM/activeEmployee"
  },
  {
    img: ac2,
    title1: "Leave",
    title2: "Requests",
    num: "02",
    link: "/adminDash/HRM/leaveRequest"
  },
  {
    img: ac3,
    title1: "Employees on",
    title2: "Leave",
    num: "02",
    link: "/adminDash/HRM/LeaveEmployee"
  },
  {
    img: ac4,
    title1: "Total",
    title2: "Employees",
    num: "20",
    link: "/adminDash/HRM/totalEmployee"
  },
];

const EmployeeHRM = ({
  pop1,
  setPop1,
  pop,
  setPop,
  setAlert,
  isHr = false,
}) => {
  const { user, getUsers, getActiveUsersCount } = useMain();

  const [counts, setCounts] = useState({
    activeEmployees: 0,
    leaveRequest: 0,
    employeesLeaves: 0,
    totalEmployees: 0
  });
  const [loadFlag, setLoadFlag] = useState(true);

  useEffect(()=>{
    getData();
  },[]);

  const getData=async()=>{
    setLoadFlag(true);
    const ans = await getUsers();
    const ans1 = await getActiveUsersCount();
    console.log(ans1);
    setCounts({
      ...counts, totalEmployees: ans.data.length, activeEmployees: ans1.data
    });
    setLoadFlag(false);
  };

  return (
    <>
      <div className="employee-dash h-full">
        {isHr ? <HrSidebar /> : <AdminSidebar pop={pop} setPop={setPop} />}
        
        <div className="tm">
          {isHr ? (
            <HrNavbar
              user={user}
              setAlert={setAlert}
              pop1={pop1}
              setPop1={setPop1}
            />
          ) : (
            <AdminNavbar user={user} setAlert={setAlert} />
          )}

          {loadFlag ? 'Loading ..' : <div className="em">
            <div className="flex-col">
              <div className="hrmDasTxtFir">
                <p className="hrmHed">Dashboard</p>
                <div className="hrDsPa">
                  <p className="hrFirDs">Dashboard</p>
                  <span>
                    <img src={chevron} alt="" />
                  </span>
                  <span className="html">HRM</span>
                </div>
              </div>

              <main className="attend-ctiveWrap">
                {/* left side */}
                <div className="hrmActLeft">

                  {/* first  */}
                  <div className="hrLefFir">
                    <NavLink to={`/adminDash/HRM/activeEmployee`}>
                      <div className="sinActDat">
                        <img className="firImg" src={ac1} alt="" />

                        <div className="titWrap">
                          <p className="t1">{'Active'}</p>
                          <p className="t2">{'Employees'}</p>
                        </div>

                        <p className="hrmlRNu">{counts?.activeEmployees}</p>
                      </div>
                    </NavLink>

                    <NavLink to={`/adminDash/HRM/leaveRequest`}>
                      <div className="sinActDat">
                        <img className="firImg" src={ac2} alt="" />

                        <div className="titWrap">
                          <p className="t1">{'Leave'}</p>
                          <p className="t2">{'Requests'}</p>
                        </div>

                        <p className="hrmlRNu">{counts?.leaveRequest}</p>
                      </div>
                    </NavLink>

                    <NavLink to={`/adminDash/HRM/LeaveEmployee`}>
                      <div className="sinActDat">
                        <img className="firImg" src={ac3} alt="" />

                        <div className="titWrap">
                          <p className="t1">{'Employees on'}</p>
                          <p className="t2">{'Leave'}</p>
                        </div>

                        <p className="hrmlRNu">{counts?.employeesLeaves}</p>
                      </div>
                    </NavLink>

                    <NavLink to={`/adminDash/HRM/totalEmployee`}>
                      <div className="sinActDat">
                        <img className="firImg" src={ac4} alt="" />

                        <div className="titWrap">
                          <p className="t1">{'Total'}</p>
                          <p className="t2">{'Employees'}</p>
                        </div>

                        <p className="hrmlRNu">{counts?.totalEmployees}</p>
                      </div>
                    </NavLink>
                  </div>

                  {/* second  */}
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

                {/* right side */}
                <div className="hrmActRight">


                  {/* first  */}
                  <div className="markAttWrap">
                    {/* top */}
                    <div className="markAtt">
                      <p>Mark Attandance</p>
                      <img src={timer} alt="" />
                    </div>

                    <hr />

                    <div className="myOficeWrap">
                      <p className="myOfText">My Office Time: 10:00 to 19:00</p>

                      <div className="oficTime">

                        {/* single */}
                        <div className="ofSin">
                          <div className="singlTime">
                            <p>00</p>
                          </div>

                          <p className="day">Hours</p>
                        </div>

                        {/* single */}
                        <div className="ofSin">
                          <div className="singlTime">
                            <p>00</p>
                          </div>

                          <p className="day">Minutes</p>
                        </div>

                        {/* single */}
                        <div className="ofSin">
                          <div className="singlTime">
                            <p>00</p>
                          </div>

                          <p className="day">Seconds</p>
                        </div>

                      </div>


                      <div className="clockINOUTBtn">
                        <button className="clockIN">
                          <span>Clock In</span>
                        </button>
                        <button className="clockOUT">
                          <span>Clock Out</span>
                        </button>
                      </div>



                    </div>
                  </div>

                  {/* second  */}
                  <div className="timeSheetWrap">

                    <div className="tScONT">
                      <p className="time">Timesheets</p>

                      <div className="caleMagnify">
                        <img src={calendarMonth} alt="" />
                        <img src={MagnifyingGlass} alt="" />
                        <span>Search..</span>
                      </div>
                    </div>

                    {/* table  */}


                    <div class="relative overflow-x-auto">
                      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs uppercase textALLtITL ">
                          <tr >
                            <th scope="col" class="px-6 py-3 taskTitl">
                              NAME
                            </th>
                            <th scope="col" class="px-6 py-3 taskTitl">
                              DATE
                            </th>
                            <th scope="col" class="px-6 py-3 taskTitl">
                              TASKS
                            </th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr class="bg-white border-b  ">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap taskAns ">
                              Surbhi Rajwanshi
                            </th>
                            <td class="px-6 py-4 taskAns">
                              JAN 22,2024
                            </td>
                            <td class="px-6 py-4 taskAns">
                              Skimoil, Madfish
                            </td>

                          </tr>
                          <tr class="bg-white border-b  ">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap taskAns ">
                              Surbhi Rajwanshi
                            </th>
                            <td class="px-6 py-4 taskAns">
                              JAN 22,2024
                            </td>
                            <td class="px-6 py-4 taskAns">
                              Skimoil, Madfish
                            </td>

                          </tr>
                          <tr class="bg-white border-b  ">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap taskAns ">
                              Surbhi Rajwanshi
                            </th>
                            <td class="px-6 py-4 taskAns">
                              JAN 22,2024
                            </td>
                            <td class="px-6 py-4 taskAns">
                              Skimoil, Madfish
                            </td>

                          </tr>
                          <tr class="bg-white border-b  ">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap taskAns ">
                              Surbhi Rajwanshi
                            </th>
                            <td class="px-6 py-4 taskAns">
                              JAN 22,2024
                            </td>
                            <td class="px-6 py-4 taskAns">
                              Skimoil, Madfish
                            </td>

                          </tr>
                          <tr class="bg-white border-b  ">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap taskAns ">
                              Surbhi Rajwanshi
                            </th>
                            <td class="px-6 py-4 taskAns">
                              JAN 22,2024
                            </td>
                            <td class="px-6 py-4 taskAns">
                              Skimoil, Madfish
                            </td>

                          </tr>
                          <tr class="bg-white border-b  ">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap taskAns ">
                              Surbhi Rajwanshi
                            </th>
                            <td class="px-6 py-4 taskAns">
                              JAN 22,2024
                            </td>
                            <td class="px-6 py-4 taskAns">
                              Skimoil, Madfish
                            </td>

                          </tr>
                          <tr class="bg-white border-b  ">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap taskAns ">
                              Surbhi Rajwanshi
                            </th>
                            <td class="px-6 py-4 taskAns">
                              JAN 22,2024
                            </td>
                            <td class="px-6 py-4 taskAns">
                              Skimoil, Madfish
                            </td>

                          </tr>

                        </tbody>
                      </table>
                    </div>

                    {/* table  */}


                  </div>




                </div>
              </main>
            </div>
          </div>}
        </div>
      </div>
    </>
  );
};

export default EmployeeHRM;