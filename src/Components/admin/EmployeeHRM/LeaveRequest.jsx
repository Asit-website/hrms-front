import AdminNavbar from "../../admin/Navbar/AdminNavbar";
import AdminSidebar from "../../admin/Sidebar/AdminSidebar";
import "react-calendar/dist/Calendar.css";
import { useMain } from "../../../hooks/useMain";
import HrSidebar from "../../Hr/Sidebar/HrSidebar";
import HrNavbar from "../../Hr/Navbar/HrNavbar";
import chevron from "../../images/chevron_right.png";
import "./hrm.css";
import "./leaveReq.css";
import { NavLink } from "react-router-dom";
import write from "../../images/write.png";
import del from "../../images/del.png";
import write2 from "../../images/write2.png";
import { useEffect, useState } from "react";

const LeaveRequest = ({
  pop1,
  setPop1,
  pop,
  setPop,
  setAlert,
  isHr = false,
}) => {
  const { user, getUserLeaves } = useMain();

  const [data, setData] = useState([]);

  useEffect(()=>{
    // getData();
  },[]);

  const getData=async()=>{
    let ans = await getUserLeaves();
    // console.log(ans);
    setData(ans.data);
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

          <div className="em">
            <div className="flex-col">
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
                  <span className="thml">manage Leave</span>
                </div>
              </div>

              {/* second  */}
              <main className="leaveReqWrap">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs uppercase textALLtITL ">
                      <tr>
                        <th scope="col" className="px-3 py-3 Uppercase">
                          <div className="flex items-center checkbox_ss ">
                            {/* <input
                              disabled=""
                              id="disabled-checkbox"
                              type="checkbox"
                              defaultValue=""
                              className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            /> */}
                            <label htmlFor="disabled-checkbox">EMPLOYEE</label>
                          </div>
                        </th>
                        <th scope="col" className="px-3 py-3 uppercase">
                          LEAVE TYPES
                        </th>
                        <th scope="col" className="px-3 py-3 uppercase">
                          APPLIED ON
                        </th>
                      
                        <th scope="col" className="px-3 py-3 uppercase">
                          START DATE
                        </th>
                        <th scope="col" className="px-3 py-3 uppercase">
                          END DATE
                        </th>
                        {/* <th scope="col" className="px-3 py-3 uppercase">
                          STATUS
                        </th> */}
                        <th scope="col" className="px-3 py-3 uppercase">
                          TOTAL DAYS
                        </th>
                        <th scope="col" className="px-3 py-3 uppercase">
                          LEAVE REASON
                        </th>
                        <th scope="col" className="px-3 py-3 uppercase">
                          STATUS
                        </th>
                        <th scope="col" className="px-3 py-3 uppercase">
                          ACTIONS
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {data?.map((e,index)=>{
                        return (
                          <></>
                        )
                      })}
                      <tr className="bg-white border-b">
                        <th
                          scope="row"
                          className="px-3 py-4 font-medium  whitespace-nowrap taskAns "
                        >
                          <div className="flex items-center checkbox_ss ">
                            {/* <input
                              disabled=""
                              id="disabled-checkbox"
                              type="checkbox"
                              defaultValue=""
                              className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            /> */}
                            <label htmlFor="disabled-checkbox">
                              Surbhi Rajwanshi
                            </label>
                          </div>
                        </th>
                        <td className="px-3 py-4 taskAns">Medical Leave</td>
                        <td className="px-3 py-4 taskAns">Jan 17 2024 </td>
                        <td className="px-3 py-4 taskAns"> 3 Jan 2024</td>
                        <td className="px-3 py-4 taskAns"> 3 Jan 2032 </td>
                        <td className="px-3 py-4 taskAns"> 1 </td>
                        
                        <td className="px-3 py-4 taskAns">Sick Leave</td>

                        <td className="px-3 py-4 taskAns">
                          <div className="ACTIVITYsss">.....</div>
                        </td>
                        <td className="px-6 py-4  flex items-center hiii_gap">
                          <>
                            <button
                              id="dropdownMenuIconButton2222"
                              data-dropdown-toggle="dropdownDots2222"
                              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                              type="button"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                                />
                              </svg>
                            </button>
                            <button
                              id="dropdownMenuIconButton2222"
                              data-dropdown-toggle="dropdownDots2222"
                              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                              type="button"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                />
                              </svg>
                            </button>
                            <button
                              id="dropdownMenuIconButton2222"
                              data-dropdown-toggle="dropdownDots2222"
                              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                              type="button"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                              </svg>
                            </button>

                            <div
                              id="dropdownDots2222"
                              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                            >
                              <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownMenuIconButton2222"
                              >
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Dashboard
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Settings
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Earnings
                                  </a>
                                </li>
                              </ul>
                              <div className="py-2">
                                <a
                                  href="#"
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                  Separated link
                                </a>
                              </div>
                            </div>
                          </>
                        </td>
                      </tr>

                      {/* <tr className="bg-white border-b  ">
                        <th scope="row" className="px-3 py-4 font-medium  whitespace-nowrap taskAns ">
                          <div className="flex items-center checkbox_ss ">
                            <input
                              disabled=""
                              id="disabled-checkbox"
                              type="checkbox"
                              defaultValue=""
                              className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="disabled-checkbox"

                            >
                              Surbhi Rajwanshi
                            </label>
                          </div>
                        </th>
                        <td className="px-3 py-4 taskAns">
                          JAN25, 2024
                        </td>
                        <td className="px-3 py-4 taskAns">
                          Two Days
                        </td>
                        <td className="px-3 py-4 taskAns">
                          Sick Leave
                        </td>
                        <td className="px-3 py-4 taskAns">
                          ----
                        </td>
                        <td className="px-3 py-4 taskAns">
                          Sick Leave
                        </td>
                        <td className="px-3 py-4 taskAns">
                          <button
                            type="button"
                            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                          >
                            Yellow
                          </button>

                        </td>
                        <td className="px-3 py-4 taskAns">
                          <div className="ACTIVITYsss">
                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.66536 13.9998H10.332V12.3332H3.66536V13.9998ZM3.66536 10.6665H10.332V8.99984H3.66536V10.6665ZM1.9987 17.3332C1.54036 17.3332 1.148 17.17 0.821615 16.8436C0.495226 16.5172 0.332031 16.1248 0.332031 15.6665V2.33317C0.332031 1.87484 0.495226 1.48248 0.821615 1.15609C1.148 0.829698 1.54036 0.666504 1.9987 0.666504H8.66536L13.6654 5.6665V15.6665C13.6654 16.1248 13.5022 16.5172 13.1758 16.8436C12.8494 17.17 12.457 17.3332 11.9987 17.3332H1.9987ZM7.83203 6.49984V2.33317H1.9987V15.6665H11.9987V6.49984H7.83203Z" fill="#293240" />
                            </svg>
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.49967 13.6668C7.23579 13.6668 6.99967 13.5904 6.79134 13.4377C6.58301 13.2849 6.43023 13.0904 6.33301 12.8543L4.41634 7.8335H0.833008V6.16683H5.58301L7.49967 11.2502L11.333 1.146C11.4302 0.909885 11.583 0.715441 11.7913 0.562663C11.9997 0.409885 12.2358 0.333496 12.4997 0.333496C12.7636 0.333496 12.9997 0.409885 13.208 0.562663C13.4163 0.715441 13.5691 0.909885 13.6663 1.146L15.583 6.16683H19.1663V7.8335H14.4163L12.4997 2.75016L8.66634 12.8543C8.56912 13.0904 8.41634 13.2849 8.20801 13.4377C7.99968 13.5904 7.76356 13.6668 7.49967 13.6668Z" fill="#293240" />
                            </svg></div>
                        </td>

                        <td className="px-6 py-4  flex items-center hiii_gap">
                          <>
                            <button
                              id="dropdownMenuIconButton2222"
                              data-dropdown-toggle="dropdownDots2222"
                              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                              type="button"
                            >
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 4 15"
                              >
                                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                              </svg>
                            </button>
                            <div
                              id="dropdownDots2222"
                              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                            >
                              <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownMenuIconButton2222"
                              >
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Dashboard
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Settings
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Earnings
                                  </a>
                                </li>
                              </ul>
                              <div className="py-2">
                                <a
                                  href="#"
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                  Separated link
                                </a>
                              </div>
                            </div>
                          </>

                        </td>

                      </tr>
                      <tr className="bg-white border-b  ">
                        <th scope="row" className="px-3 py-4 font-medium  whitespace-nowrap taskAns ">
                          <div className="flex items-center checkbox_ss ">
                            <input
                              disabled=""
                              id="disabled-checkbox"
                              type="checkbox"
                              defaultValue=""
                              className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="disabled-checkbox"

                            >
                              Surbhi Rajwanshi
                            </label>
                          </div>
                        </th>
                        <td className="px-3 py-4 taskAns">
                          JAN25, 2024
                        </td>
                        <td className="px-3 py-4 taskAns">
                          Two Days
                        </td>
                        <td className="px-3 py-4 taskAns">
                          Sick Leave
                        </td>
                        <td className="px-3 py-4 taskAns">
                          ----
                        </td>
                        <td className="px-3 py-4 taskAns">
                          Sick Leave
                        </td>
                        <td className="px-3 py-4 taskAns">
                          <button
                            type="button"
                            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                          >
                            Yellow
                          </button>

                        </td>
                        <td className="px-3 py-4 taskAns">
                          <div className="ACTIVITYsss">
                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.66536 13.9998H10.332V12.3332H3.66536V13.9998ZM3.66536 10.6665H10.332V8.99984H3.66536V10.6665ZM1.9987 17.3332C1.54036 17.3332 1.148 17.17 0.821615 16.8436C0.495226 16.5172 0.332031 16.1248 0.332031 15.6665V2.33317C0.332031 1.87484 0.495226 1.48248 0.821615 1.15609C1.148 0.829698 1.54036 0.666504 1.9987 0.666504H8.66536L13.6654 5.6665V15.6665C13.6654 16.1248 13.5022 16.5172 13.1758 16.8436C12.8494 17.17 12.457 17.3332 11.9987 17.3332H1.9987ZM7.83203 6.49984V2.33317H1.9987V15.6665H11.9987V6.49984H7.83203Z" fill="#293240" />
                            </svg>
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.49967 13.6668C7.23579 13.6668 6.99967 13.5904 6.79134 13.4377C6.58301 13.2849 6.43023 13.0904 6.33301 12.8543L4.41634 7.8335H0.833008V6.16683H5.58301L7.49967 11.2502L11.333 1.146C11.4302 0.909885 11.583 0.715441 11.7913 0.562663C11.9997 0.409885 12.2358 0.333496 12.4997 0.333496C12.7636 0.333496 12.9997 0.409885 13.208 0.562663C13.4163 0.715441 13.5691 0.909885 13.6663 1.146L15.583 6.16683H19.1663V7.8335H14.4163L12.4997 2.75016L8.66634 12.8543C8.56912 13.0904 8.41634 13.2849 8.20801 13.4377C7.99968 13.5904 7.76356 13.6668 7.49967 13.6668Z" fill="#293240" />
                            </svg></div>
                        </td>

                        <td className="px-6 py-4  flex items-center hiii_gap">
                          <>
                            <button
                              id="dropdownMenuIconButton2222"
                              data-dropdown-toggle="dropdownDots2222"
                              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                              type="button"
                            >
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 4 15"
                              >
                                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                              </svg>
                            </button>
                          
                            <div
                              id="dropdownDots2222"
                              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                            >
                              <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownMenuIconButton2222"
                              >
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Dashboard
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Settings
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Earnings
                                  </a>
                                </li>
                              </ul>
                              <div className="py-2">
                                <a
                                  href="#"
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                  Separated link
                                </a>
                              </div>
                            </div>
                          </>

                        </td>

                      </tr>
                      <tr className="bg-white border-b  ">
                        <th scope="row" className="px-3 py-4 font-medium  whitespace-nowrap taskAns ">
                          <div className="flex items-center checkbox_ss ">
                            <input
                              disabled=""
                              id="disabled-checkbox"
                              type="checkbox"
                              defaultValue=""
                              className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="disabled-checkbox"

                            >
                              Surbhi Rajwanshi
                            </label>
                          </div>
                        </th>
                        <td className="px-3 py-4 taskAns">
                          JAN25, 2024
                        </td>
                        <td className="px-3 py-4 taskAns">
                          Two Days
                        </td>
                        <td className="px-3 py-4 taskAns">
                          Sick Leave
                        </td>
                        <td className="px-3 py-4 taskAns">
                          ----
                        </td>
                        <td className="px-3 py-4 taskAns">
                          Sick Leave
                        </td>
                        <td className="px-3 py-4 taskAns">
                          <button
                            type="button"
                            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                          >
                            Yellow
                          </button>

                        </td>
                        <td className="px-3 py-4 taskAns">
                          <div className="ACTIVITYsss">
                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.66536 13.9998H10.332V12.3332H3.66536V13.9998ZM3.66536 10.6665H10.332V8.99984H3.66536V10.6665ZM1.9987 17.3332C1.54036 17.3332 1.148 17.17 0.821615 16.8436C0.495226 16.5172 0.332031 16.1248 0.332031 15.6665V2.33317C0.332031 1.87484 0.495226 1.48248 0.821615 1.15609C1.148 0.829698 1.54036 0.666504 1.9987 0.666504H8.66536L13.6654 5.6665V15.6665C13.6654 16.1248 13.5022 16.5172 13.1758 16.8436C12.8494 17.17 12.457 17.3332 11.9987 17.3332H1.9987ZM7.83203 6.49984V2.33317H1.9987V15.6665H11.9987V6.49984H7.83203Z" fill="#293240" />
                            </svg>
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.49967 13.6668C7.23579 13.6668 6.99967 13.5904 6.79134 13.4377C6.58301 13.2849 6.43023 13.0904 6.33301 12.8543L4.41634 7.8335H0.833008V6.16683H5.58301L7.49967 11.2502L11.333 1.146C11.4302 0.909885 11.583 0.715441 11.7913 0.562663C11.9997 0.409885 12.2358 0.333496 12.4997 0.333496C12.7636 0.333496 12.9997 0.409885 13.208 0.562663C13.4163 0.715441 13.5691 0.909885 13.6663 1.146L15.583 6.16683H19.1663V7.8335H14.4163L12.4997 2.75016L8.66634 12.8543C8.56912 13.0904 8.41634 13.2849 8.20801 13.4377C7.99968 13.5904 7.76356 13.6668 7.49967 13.6668Z" fill="#293240" />
                            </svg></div>
                        </td>

                        <td className="px-6 py-4  flex items-center hiii_gap">
                          <>
                            <button
                              id="dropdownMenuIconButton2222"
                              data-dropdown-toggle="dropdownDots2222"
                              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                              type="button"
                            >
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 4 15"
                              >
                                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                              </svg>
                            </button>
                            
                            <div
                              id="dropdownDots2222"
                              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                            >
                              <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownMenuIconButton2222"
                              >
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Dashboard
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Settings
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Earnings
                                  </a>
                                </li>
                              </ul>
                              <div className="py-2">
                                <a
                                  href="#"
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                  Separated link
                                </a>
                              </div>
                            </div>
                          </>

                        </td>

                      </tr>
                      <tr className="bg-white border-b  ">
                        <th scope="row" className="px-3 py-4 font-medium  whitespace-nowrap taskAns ">
                          <div className="flex items-center checkbox_ss ">
                            <input
                              disabled=""
                              id="disabled-checkbox"
                              type="checkbox"
                              defaultValue=""
                              className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="disabled-checkbox"

                            >
                              Surbhi Rajwanshi
                            </label>
                          </div>
                        </th>
                        <td className="px-3 py-4 taskAns">
                          JAN25, 2024
                        </td>
                        <td className="px-3 py-4 taskAns">
                          Two Days
                        </td>
                        <td className="px-3 py-4 taskAns">
                          Sick Leave
                        </td>
                        <td className="px-3 py-4 taskAns">
                          ----
                        </td>
                        <td className="px-3 py-4 taskAns">
                          Sick Leave
                        </td>
                        <td className="px-3 py-4 taskAns">
                          <button
                            type="button"
                            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                          >
                            Yellow
                          </button>

                        </td>
                        <td className="px-3 py-4 taskAns">
                          <div className="ACTIVITYsss">
                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.66536 13.9998H10.332V12.3332H3.66536V13.9998ZM3.66536 10.6665H10.332V8.99984H3.66536V10.6665ZM1.9987 17.3332C1.54036 17.3332 1.148 17.17 0.821615 16.8436C0.495226 16.5172 0.332031 16.1248 0.332031 15.6665V2.33317C0.332031 1.87484 0.495226 1.48248 0.821615 1.15609C1.148 0.829698 1.54036 0.666504 1.9987 0.666504H8.66536L13.6654 5.6665V15.6665C13.6654 16.1248 13.5022 16.5172 13.1758 16.8436C12.8494 17.17 12.457 17.3332 11.9987 17.3332H1.9987ZM7.83203 6.49984V2.33317H1.9987V15.6665H11.9987V6.49984H7.83203Z" fill="#293240" />
                            </svg>
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.49967 13.6668C7.23579 13.6668 6.99967 13.5904 6.79134 13.4377C6.58301 13.2849 6.43023 13.0904 6.33301 12.8543L4.41634 7.8335H0.833008V6.16683H5.58301L7.49967 11.2502L11.333 1.146C11.4302 0.909885 11.583 0.715441 11.7913 0.562663C11.9997 0.409885 12.2358 0.333496 12.4997 0.333496C12.7636 0.333496 12.9997 0.409885 13.208 0.562663C13.4163 0.715441 13.5691 0.909885 13.6663 1.146L15.583 6.16683H19.1663V7.8335H14.4163L12.4997 2.75016L8.66634 12.8543C8.56912 13.0904 8.41634 13.2849 8.20801 13.4377C7.99968 13.5904 7.76356 13.6668 7.49967 13.6668Z" fill="#293240" />
                            </svg></div>
                        </td>

                        <td className="px-6 py-4  flex items-center hiii_gap">
                          <>
                            <button
                              id="dropdownMenuIconButton2222"
                              data-dropdown-toggle="dropdownDots2222"
                              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                              type="button"
                            >
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 4 15"
                              >
                                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                              </svg>
                            </button>
                            <div
                              id="dropdownDots2222"
                              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                            >
                              <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownMenuIconButton2222"
                              >
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Dashboard
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Settings
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Earnings
                                  </a>
                                </li>
                              </ul>
                              <div className="py-2">
                                <a
                                  href="#"
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                  Separated link
                                </a>
                              </div>
                            </div>
                          </>

                        </td>

                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveRequest;
