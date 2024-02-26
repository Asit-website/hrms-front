import React, { useState, useEffect } from "react";
import AdminNavbar from "../../admin/Navbar/AdminNavbar";
import AdminSidebar from "../../admin/Sidebar/AdminSidebar";
import "react-calendar/dist/Calendar.css";
import { useMain } from "../../../hooks/useMain";
import plus1 from "../../images/plus1.png";
import loj from "../../images/loj.png";
import person from "../../images/person.png";
import person1 from "../../images/person1.png";
import person2 from "../../images/person2.png";
import { NavLink } from "react-router-dom";
import "./HRMsystem.css";

const HRMsystemSetup = ({ setAlert, pop, setPop }) => {
  const { user } = useMain();
  const [value, onChange] = useState(new Date());
  const [gen, setGen] = useState([]);
  const [flag, setFlag] = useState();

  const [open, setOpen] = useState(1);

  const [popup, setPopup] = useState(false);

  const styleing = {
    display: popup ? "block" : "none",
  };

  const handle1 = (e) => {
    e.preventDefault();
    setOpen(1);
  };
  const handle2 = (e) => {
    e.preventDefault();
    setOpen(2);
  };
  const handle3 = (e) => {
    e.preventDefault();
    setOpen(3);
  };

  useEffect(() => {
    // getData();
  }, []);
  // console.log(gen.concat().toString.caller.arguments());
  // const getData = async () => {

  // };

  return (
    <>
      <div className="employee-dash h-full">
        <AdminSidebar pop={pop} setPop={setPop} />

        <div className="tm">
          <AdminNavbar user={user} setAlert={setAlert} />

          <div className="em">
            <div className="flex-col">
              <div className="admin-main">
                <div className="hrmssystemsetup-parents">
                  <div className="hrmssystemsetup-rightmenu">
                    <div
                      onClick={handle1}
                      className="hrmsystemsetup-subrightmenu"
                    >
                      Branch
                    </div>
                    <div
                      onClick={handle2}
                      className="hrmsystemsetup-subrightmenu"
                    >
                      Department
                    </div>
                    <div
                      onClick={handle3}
                      className="hrmsystemsetup-subrightmenu"
                    >
                      Designation
                    </div>
                  </div>

                  {open === 1 && (
                    <div className="hrmsystemsetup-leftmenu">
                      <div class="hrmsystemsetup-container">
                        {/* <div className="hrmsystemsetup-ican">
                          <svg
                            class="w-6 h-6 text-gray-800 dark:text-black"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 8 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                            />
                          </svg>
                        </div> */}
                        <div class="hrmsystemsetup-pagination">
                          <label for="entries">10 entries per page</label>
                          <select id="entries">
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                          </select>
                        </div>
                        <div class="hrmsystemsetup-search">
                          <input type="text" placeholder="Search..." />
                        </div>
                        <table>
                          <tr>
                            <th>BRANCH</th>
                            <th>ACTION</th>
                          </tr>
                          <tr>
                            <td>Head office</td>
                            <td>
                              <a href="#" class="action-buttons view">
                                View
                              </a>
                              <a href="#" class="action-buttons delete">
                                Delete
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>kushel</td>
                            <td>
                              <a href="#" class="action-buttons view">
                                View
                              </a>
                              <a href="#" class="action-buttons delete">
                                Delete
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>sector63</td>
                            <td>
                              <a href="#" class="action-buttons view">
                                View
                              </a>
                              <a href="#" class="action-buttons delete">
                                Delete
                              </a>
                            </td>
                          </tr>
                        </table>
                        <p>Showing 1 to 3 of 3 entries</p>
                      </div>
                    </div>
                  )}

                  {open === 2 && (
                    <div className="hrmsystemsetup-leftmenu">
                      <div class="hrmsystemsetup-container">
                        <div className="hrmsystemsetup-ican">
                          <svg
                            class="w-6 h-6 text-gray-800 dark:text-black"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 8 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                            />
                          </svg>
                        </div>
                        <div class="hrmsystemsetup-pagination">
                          <label for="entries">10 entries per page</label>
                          <select id="entries">
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                          </select>
                        </div>
                        <div class="hrmsystemsetup-search">
                          <input type="text" placeholder="Search..." />
                        </div>
                        <table>
                          <tr>
                            <th>BRANCH</th>
                            <th>ACTION</th>
                          </tr>
                          <tr>
                            <td>Head office</td>
                            <td>
                              <a href="#" class="action-buttons view">
                                View
                              </a>
                              <a href="#" class="action-buttons delete">
                                Delete
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>kushel</td>
                            <td>
                              <a href="#" class="action-buttons view">
                                View
                              </a>
                              <a href="#" class="action-buttons delete">
                                Delete
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>sector63</td>
                            <td>
                              <a href="#" class="action-buttons view">
                                View
                              </a>
                              <a href="#" class="action-buttons delete">
                                Delete
                              </a>
                            </td>
                          </tr>
                        </table>
                        <p>Showing 1 to  of 3 entries</p>
                      </div>
                    </div>
                  )}

                  {open === 3 && (
                    <div className="hrmsystemsetup-leftmenu">
                      <div class="hrmsystemsetup-container">
                        <div className="hrmsystemsetup-ican">
                          <svg
                            class="w-6 h-6 text-gray-800 dark:text-black"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 8 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                            />
                          </svg>
                        </div>
                        <div class="hrmsystemsetup-pagination">
                          <label for="entries">10 entries per page</label>
                          <select id="entries">
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                          </select>
                        </div>
                        <div class="hrmsystemsetup-search">
                          <input type="text" placeholder="Search..." />
                        </div>
                        <table>
                          <tr>
                            <th>BRANCH</th>
                            <th>ACTION</th>
                          </tr>
                          <tr>
                            <td>Admin </td>
                            <td>
                              <a href="#" class="action-buttons view">
                                View
                              </a>
                              <a href="#" class="action-buttons delete">
                                Delete
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Admin</td>
                            <td>
                              <a href="#" class="action-buttons view">
                                View
                              </a>
                              <a href="#" class="action-buttons delete">
                                Delete
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>sector63</td>
                            <td>
                              <a href="#" class="action-buttons view">
                                View
                              </a>
                              <a href="#" class="action-buttons delete">
                                Delete
                              </a>
                            </td>
                          </tr>
                        </table>
                        <p>Showing 1 to 3 of 10 entries</p>
                      </div>
                    </div>
                  )}
                </div>

                <>
                  {/* Modal toggle */}
                  <button
                    onClick={() => {
                      setPopup(!popup);
                      console.log("hi");
                    }}
                    type="button"
                  >
                    Toggle modal
                    <svg
                            class="w-6 h-6 text-gray-800 dark:text-black"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 8 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                            />
                          </svg>
                  </button>
                  {/* Main modal */}
                  <div
                    style={styleing}
                    // id="default-modal"
                    tabIndex={-1}
                    aria-hidden="true"
                    className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                  >
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                      {/* Modal content */}
                      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Terms of Service
                          </h3>
                       
                          {/* <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="default-modal"
                          >
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 14"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                              />
                            </svg>
                            <span className="sr-only">Close modal</span>
                          </button> */}
                        </div>
                        {/* Modal body */}
                        <div className="p-4 md:p-5 space-y-4">
                        <label >Name:</label>
                          <input type="text" name="" id="" />
                          {/* <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European
                            Union enacts new consumer privacy laws for its
                            citizens, companies around the world are updating
                            their terms of service agreements to comply.
                          </p>
                          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection
                            Regulation (G.D.P.R.) goes into effect on May 25 and
                            is meant to ensure a common set of data rights in
                            the European Union. It requires organizations to
                            notify users as soon as possible of high-risk data
                            breaches that could personally affect them.
                          </p> */}
                        </div>
                        {/* Modal footer */}
                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                          <button
                            onClick={()=> setPopup(false)}
                            data-modal-hide="default-modal"
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={()=> setPopup(false)}
                            data-modal-hide="default-modal"
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                          >
                            Create
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>

                {/* <div className="admin1">
                  <img
                    onClick={() => setPop(true)}
                    className="plus1"
                    src={plus1}
                    alt="plus1"
                  />
                </div>
                <div className="main-card flex items-center  justify-between">
                  <div className="main-box main-boxes">
                    <NavLink to="/adminDash/EmployeeMan">
                      <div className="main-box1">
                        <div className="loj">
                          <img src={person} alt="loj" />
                        </div>
                      </div>
                    </NavLink>
                    <NavLink to="/adminDash/EmployeeMan">
                      <div className="main-box2">
                        <h3>Employee Registration</h3>
                      </div>
                    </NavLink>
                  </div>
                  
                  <NavLink to="/adminDash/profile-management" className="main-box main-boxes">
                    <div className="main-box1">
                      <div className="loj">
                        <img src={person} alt="loj" />
                      </div>
                    </div>
                    <div className="main-box2">
                      <h3>Profile Management</h3>
                    </div>
                  </NavLink>

                  <div className="main-box main-boxes">
                    <div className="main-box1">
                      <div className="loj">
                        <img src={person2} alt="loj" />
                      </div>
                    </div>
                    <div className="main-box2">
                      <h3>Roles Management</h3>
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

export default HRMsystemSetup;
