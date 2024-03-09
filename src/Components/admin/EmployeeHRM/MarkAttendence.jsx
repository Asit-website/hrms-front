import AdminNavbar from "../../admin/Navbar/AdminNavbar";
import AdminSidebar from "../../admin/Sidebar/AdminSidebar";
import "react-calendar/dist/Calendar.css";
import { useMain } from "../../../hooks/useMain";
import HrSidebar from "../../Hr/Sidebar/HrSidebar";
import HrNavbar from "../../Hr/Navbar/HrNavbar";
import chevron from "../../images/chevron_right.png";
import "./hrm.css";
import "./leaveReq.css";
import "./markAttendance.css";
import { NavLink } from "react-router-dom";
import search22 from "../../images/search22.png";
import restart from "../../images/restart_alt.png";
import srch2 from "../../images/srch2.png";
import moreVert from "../../images/more_vert.png";
import { useEffect, useState } from "react";

const MarkAttendance = ({
  pop1,
  setPop1,
  pop,
  setPop,
  setAlert,
  isHr = false,
}) => {
  const { user, getAllActivities } = useMain();
  const [data, setData] = useState([]);

  const ans = [
    {
      employee: "Surbhi Rajwanshi",
      date: "Jan25, 2024",
      status: "Present",
      clockIn: "09:00:00",
      clockOut: "18:00:00",
      late: "00:00:00",
      overtime: "00:00:00",
    },
  ];

  const getData = async () => {
    let ans = await getAllActivities();
    console.log(ans);
    setData(ans.data);
  };

  const [selectedOption, setSelectedOption] = useState("daily");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

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

          <div className="em">
            <div className="flex-col emWraping">
              {/* first  */}
              <div className="hrmDasTxtFir">
                <p className="hrmHed">Dashboard</p>

                <div className="hrDsPa">
                  <p className="hrFirDs">Dashboard</p>{" "}
                  <span>
                    <img src={chevron} alt="" />
                  </span>{" "}
                  <NavLink to={`/adminDash/HRM`}>
                    <span className="hrFirDs">Leave Management</span>
                  </NavLink>
                  <span>
                    <img src={chevron} alt="" />
                  </span>{" "}
                  <span className="thml">Mark Attendance</span>
                </div>
              </div>

              {/* <div className="marSecond">
                <div className="mAdSlE">
                  <p className="tText">Type</p>
                  <label htmlFor="">
                    <input type="radio" />
                    <span>Monthly</span>
                  </label>
                  <label htmlFor="">
                    <input type="radio" />
                    <span>Daily</span>
                  </label>
                </div> */}

              <div className="marSecond">
                <div className="mAdSlE">
                  <p className="tText">Type</p>
                  <label htmlFor="monthly">
                    <input
                      type="radio"
                      id="monthly"
                      value="monthly"
                      checked={selectedOption === "monthly"}
                      onChange={handleOptionChange}
                    />
                    <span>Monthly</span>
                  </label>
                  <label htmlFor="daily">
                    <input
                      type="radio"
                      id="daily"
                      value="daily"
                      checked={selectedOption === "daily"}
                      onChange={handleOptionChange}
                    />
                    <span>Daily</span>
                  </label>
                </div>

                <div className="maDSrIGH">
                  {selectedOption === "daily" && (
                    <>
                      <div name="" id="">
                        <input
                          type="date"
                          name=""
                          id=""
                          className="daate_mate_btn"
                        />
                      </div>

                      {/* <select name="" id="">
                        <option value="Select Branch">Select Branch</option>
                      </select> */}

                      <select name="" id="">
                        <option value="Select Branch">
                          Select Department{" "}
                        </option>
                        <option value="">All</option>
                      </select>

                      <div className="resSeBtn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                          />
                        </svg>
                      </div>
                    </>
                  )}
                  {selectedOption === "monthly" && (
                    <>
                      {/* <h2>Monthly</h2> */}
                      <div name="" id="">
                        <input
                          type="month"
                          name=""
                          id=""
                          className="daate_mate_btn"
                        />
                      </div>

                      {/* <select name="" id="">
                        <option value="Select Branch">Select Branch</option>
                      </select> */}

                      <select name="" id="">
                        <option value="Select Branch"> Name </option>
                      </select>

                      <div>
                        <input
                          id="all"
                          type="radio"
                          name="all"
                          value="all"
                          checked={selectedOption === "all"}
                          onChange={handleOptionChange}
                        />{" "}
                        All
                      </div>

                      {/* <select name="" id="">
                        <option value="Select Branch"> All </option>
                      </select> */}

                      <div className="resSeBtn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                          />
                        </svg>
                      </div>
                    </>
                  )}

                  {selectedOption === "all" && (
                      <>
                      {/* <h2>Monthly</h2> */}
                      <div name="" id="">
                        <input
                          type="date"
                          name=""
                          id=""
                          className="daate_mate_btn"
                        />
                      </div>

                      {/* <select name="" id="">
                        <option value="Select Branch">Select Branch</option>
                      </select> */}

                      <select name="" id="">
                        <option value="Select Branch"> Name </option>
                      </select>

                      <div>
                        <input
                          id="all"
                          type="radio"
                          name="all"
                          value="all"
                          checked={selectedOption === "all"}
                          onChange={handleOptionChange}
                        />{" "}
                        All
                      </div>

                      {/* <select name="" id="">
                        <option value="Select Branch"> All </option>
                      </select> */}

                      <div className="resSeBtn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                          />
                        </svg>
                      </div>
                    </>
                    )}

                  {/* <select name="" id="">
                    <option value="Select Branch">Select Branch</option>
                  </select>

                  <select name="" id="">
                    <option value="Select Branch">Select Name</option>
                  </select>

                  <div className="resSeBtn">
                    <img src={search22} alt="" />
                    <img src={restart} alt="" />
                  </div> 
                  */}
                </div>
              </div>

              <main className="MarkAtMain">
                <div className="marknav">
                  <div className="marNavLef">
                    <select name="" id="">
                      <option value="">10</option>
                    </select>

                    <span>entries per page</span>
                  </div>
                  {/* <div className="marNavRight">
                    <img src={srch2} alt="" />
                    <input type="text" placeholder="search..." />
                  </div> */}
                </div>

                {selectedOption === "daily" && (
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="px-6 py-3 currentText">
                            Employee
                          </th>
                          <th scope="col" className="px-6 py-3 currentText">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3 currentText">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 currentText">
                            clock In
                          </th>
                          <th scope="col" className="px-6 py-3 currentText">
                            clock out
                          </th>
                          <th scope="col" className="px-6 py-3 currentText">
                            Break
                          </th>
                          <th scope="col" className="px-6 py-3 currentText">
                            Overtime
                          </th>
                          <th scope="col" className="px-6 py-3 currentText">
                            action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={index} className="bg-white ">
                            <td className="px-6 py-4 itemANs">
                              {item?.user?.fullName}
                            </td>
                            <td className="px-6 py-4 itemANs">
                              {new Date(Number(item?.date)).toLocaleDateString(
                                "en-GB"
                              )}
                            </td>
                            <td className="px-6 py-4 itemANs">{"Present"}</td>
                            <td className="px-6 py-4 itemANs">
                              {new Date(
                                Number(item.clockIn)
                              ).toLocaleTimeString("en-GB")}
                            </td>
                            <td className="px-6 py-4 itemANs">
                              {Number(item.clockOut) !== 0
                                ? new Date(
                                    Number(item.clockOut)
                                  ).toLocaleTimeString("en-GB")
                                : " - "}
                            </td>
                            <td className="px-6 py-4 itemANs">
                              {Number(item.clockOut) !== 0
                                ? `${Math.floor(item.late / 3600)
                                    .toString()
                                    .padStart(2, "0")}:${Math.floor(
                                    (item.late % 3600) / 60
                                  )
                                    .toString()
                                    .padStart(2, "0")}:${Math.floor(
                                    item.late % 60
                                  )
                                    .toString()
                                    .padStart(2, "0")}`
                                : " - "}
                            </td>
                            <td className="px-6 py-4 itemANs">
                              {Number(item.clockOut) !== 0
                                ? `${Math.floor(item.overtime / 3600)
                                    .toString()
                                    .padStart(2, "0")}:${Math.floor(
                                    (item.overtime % 3600) / 60
                                  )
                                    .toString()
                                    .padStart(2, "0")}:${Math.floor(
                                    item.overtime % 60
                                  )
                                    .toString()
                                    .padStart(2, "0")}`
                                : " - "}
                            </td>
                            <td className="px-6 py-4 ">
                              <img src={moreVert} alt="" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {selectedOption === "monthly" && (
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="px-6 py-3 currentText">
                            Employee Name
                          </th>
                          {/* <th scope="col" className="px-6 py-3 currentText">
                           Branch
                          </th> */}
                          <th scope="col" className="px-6 py-3 currentText">
                            Department
                          </th>

                          <th scope="col" className="px-6 py-3 currentText">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3 currentText">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 currentText">
                            clock In
                          </th>
                          <th scope="col" className="px-6 py-3 currentText">
                            clock out
                          </th>
                          <th scope="col" className="px-6 py-3 currentText">
                            Break
                          </th>
                          <th scope="col" className="px-6 py-3 currentText">
                            Total Time
                          </th>
                          <th scope="col" className="px-6 py-3 currentText">
                            OverTime
                          </th>
                          <th scope="col" className="px-6 py-3 currentText">
                            action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={index} className="bg-white ">
                            <td className="px-6 py-4 itemANs">
                              {item?.user?.fullName}
                            </td>
                            <td className="px-6 py-4 itemANs">
                              {new Date(Number(item?.date)).toLocaleDateString(
                                "en-GB"
                              )}
                            </td>
                            <td className="px-6 py-4 itemANs">{"Present"}</td>
                            <td className="px-6 py-4 itemANs">
                              {new Date(
                                Number(item.clockIn)
                              ).toLocaleTimeString("en-GB")}
                            </td>
                            <td className="px-6 py-4 itemANs">
                              {Number(item.clockOut) !== 0
                                ? new Date(
                                    Number(item.clockOut)
                                  ).toLocaleTimeString("en-GB")
                                : " - "}
                            </td>
                            <td className="px-6 py-4 itemANs">
                              {Number(item.clockOut) !== 0
                                ? `${Math.floor(item.late / 3600)
                                    .toString()
                                    .padStart(2, "0")}:${Math.floor(
                                    (item.late % 3600) / 60
                                  )
                                    .toString()
                                    .padStart(2, "0")}:${Math.floor(
                                    item.late % 60
                                  )
                                    .toString()
                                    .padStart(2, "0")}`
                                : " - "}
                            </td>
                            <td className="px-6 py-4 itemANs">
                              {Number(item.clockOut) !== 0
                                ? `${Math.floor(item.overtime / 3600)
                                    .toString()
                                    .padStart(2, "0")}:${Math.floor(
                                    (item.overtime % 3600) / 60
                                  )
                                    .toString()
                                    .padStart(2, "0")}:${Math.floor(
                                    item.overtime % 60
                                  )
                                    .toString()
                                    .padStart(2, "0")}`
                                : " - "}
                            </td>
                            <td className="px-6 py-4 ">
                              <img src={moreVert} alt="" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {selectedOption === "all" && (
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="px-6 py-3 currentText">
                            Employee
                          </th>
                          <th scope="col" className="px-6 py-3 currentText">
                           Branch
                          </th>
                          <th scope="col" className="px-6 py-3 currentText">
                            Department
                          </th>

                          <th scope="col" className="px-6 py-3 currentText">
                            Designation
                          </th>
                          <th scope="col" className="px-6 py-3 currentText">
                            Total working days
                          </th>
                          <th scope="col" className="px-6 py-3 currentText">
                            Present
                          </th>
                          <th scope="col" className="px-6 py-3 currentText">
                            Absent 
                          </th>
                          <th scope="col" className="px-6 py-3 currentText">
                            action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={index} className="bg-white ">
                            <td className="px-6 py-4 itemANs">
                              {item?.user?.fullName}
                            </td>
                            <td className="px-6 py-4 itemANs">
                              {new Date(Number(item?.date)).toLocaleDateString(
                                "en-GB"
                              )}
                            </td>
                            <td className="px-6 py-4 itemANs">{"Present"}</td>
                            <td className="px-6 py-4 itemANs">
                              {new Date(
                                Number(item.clockIn)
                              ).toLocaleTimeString("en-GB")}
                            </td>
                            <td className="px-6 py-4 itemANs">
                              {Number(item.clockOut) !== 0
                                ? new Date(
                                    Number(item.clockOut)
                                  ).toLocaleTimeString("en-GB")
                                : " - "}
                            </td>
                            <td className="px-6 py-4 itemANs">
                              {Number(item.clockOut) !== 0
                                ? `${Math.floor(item.late / 3600)
                                    .toString()
                                    .padStart(2, "0")}:${Math.floor(
                                    (item.late % 3600) / 60
                                  )
                                    .toString()
                                    .padStart(2, "0")}:${Math.floor(
                                    item.late % 60
                                  )
                                    .toString()
                                    .padStart(2, "0")}`
                                : " - "}
                            </td>
                            <td className="px-6 py-4 itemANs">
                              {Number(item.clockOut) !== 0
                                ? `${Math.floor(item.overtime / 3600)
                                    .toString()
                                    .padStart(2, "0")}:${Math.floor(
                                    (item.overtime % 3600) / 60
                                  )
                                    .toString()
                                    .padStart(2, "0")}:${Math.floor(
                                    item.overtime % 60
                                  )
                                    .toString()
                                    .padStart(2, "0")}`
                                : " - "}
                            </td>
                            <td className="px-6 py-4 ">
                              <img src={moreVert} alt="" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarkAttendance;
