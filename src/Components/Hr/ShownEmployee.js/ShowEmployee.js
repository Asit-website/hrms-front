import React from "react";
import HrSidebar from "../Sidebar/HrSidebar";
import HrNavbar from "../Navbar/HrNavbar";
import hrLok from "../../images/hrLok.png";
import hrLok1 from "../../images/hrLok1.png";
import cg from '../../images/cg.png';
import celes from '../../images/celes.png';
import green from '../../images/green.png';
import bottomArrow from '../../images/bottomArrow.png';
import { NavLink } from "react-router-dom";
const ShowEmployee = ({ setAlert }) => {
  return (
    <>
      <div className="employee-dash h-full">
        <HrSidebar setAlert={setAlert} />
        <div className="tm">
          <HrNavbar setAlert={setAlert} />
          <div className="em">
            <div className="flex-col">
              <div className="hr-bash">
                <div className="main-card flex items-center  justify-between">
                <div className="main-box">
                   <NavLink to="/hrDash/EmployeeReg"> <div className="main-box1 hr-box1">
                      <img src={hrLok} alt="loj" />
                    </div></NavLink>
                   <NavLink to="/hrDash/EmployeeReg"><div className="main-box2 hr-box2">
                      <h3>Employee Registration</h3>
                    </div></NavLink>
                  </div>
                  <div className="main-box">
                  <NavLink to="/hrDash/EmployeeMan1">
                    <div className="main-box1 hr-box1">
                      <img src={hrLok1} alt="loj" />
                    </div></NavLink>
                    <NavLink to="/hrDash/EmployeeMan1">
                    <div className="main-box2 hr-box2">
                      <h3>Employees Management</h3>
                    </div></NavLink>
                  </div>
                  <div className="main-box">
                    <div className="main-box1 hr-box1">
                      <img src={hrLok1} alt="loj" />
                    </div>
                    <div className="main-box2 hr-box2">
                      <h3>Recruitments</h3>
                    </div>
                  </div>
                </div>
                <div class="relative overflow-x-auto overhidding">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="bg-[#F1F6FF] theads">
                      <tr>
                        <th scope="col" class="px-6 py-3 sitar">
                          <h4>S.No</h4>
                        </th>
                        <th scope="col" class="px-6 py-3 sitar">
                          <h4>Employee Name</h4>
                        </th>
                        <th scope="col" class="px-6 py-3 sitar">
                          <h4>Designation</h4>
                        </th>
                        <th scope="col" class="px-6 py-3 sitar">
                          <h4>Reporting manager</h4>
                        </th>
                        <th scope="col" class="px-6 py-3 sitar">
                          <h4>Registration Date</h4>
                        </th>
                        <th scope="col" class="px-6 py-3 sitar">
                          <h4>Employee Code</h4>
                        </th>
                        <th scope="col" class="px-6 py-3 sitar1">
                          <h4>Employee Status</h4>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-[#F1F6FF] tr-head ">
                        <td
                          scope="row"
                          class="px-6 py-4"
                        >
                        <p className="sno">01</p>
                        </td>
                        <td class="px-6 py-4">
                          <div className=" flex items-center timer">
                              <img width={28} height={28} src={cg} alt="cg" />
                              <p className="ml-2">Chirag Negi</p>
                          </div>
                        </td>
                        <td class="px-6 py-4 timer"><p>Project Manager</p></td>
                        <td class="px-6 py-4">
                        <div className="flex items-center timer">
                              <img width={28} height={28} src={cg} alt="cg" />
                              <p className="ml-2">Shubham Gupta</p>
                          </div>
                        </td>
                        <td class="px-6 py-4">
                            <div className="reg-date flex items-center">
                                <img src={celes} alt="celes" />
                                <div className="ml-2">
                                    <h4>15 July 2021</h4>
                                    <p>10 : 45 AM</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4 timer">
                          <p>KDS06231</p>
                        </td>
                        <td class="px-6 py-4">
                            <div className=" flex items-center status">
                                <img src={green} alt="green" />
                                <p>Active</p>
                                <img src={bottomArrow} alt="green" />
                            </div>
                        </td>
                      </tr>
                      <tr class="bg-[#F1F6FF] tr-head  ">
                        <td
                          scope="row"
                          class="px-6 py-4"
                        >
                        <p className="sno">01</p>
                        </td>
                        <td class="px-6 py-4">
                          <div className=" flex items-center timer">
                              <img width={28} height={28} src={cg} alt="cg" />
                              <p className="ml-2">Chirag Negi</p>
                          </div>
                        </td>
                        <td class="px-6 py-4 timer"><p>Project Manager</p></td>
                        <td class="px-6 py-4">
                        <div className="flex items-center timer">
                              <img width={28} height={28} src={cg} alt="cg" />
                              <p className="ml-2">Shubham Gupta</p>
                          </div>
                        </td>
                        <td class="px-6 py-4">
                            <div className="reg-date flex items-center">
                                <img src={celes} alt="celes" />
                                <div className="ml-2">
                                    <h4>15 July 2021</h4>
                                    <p>10 : 45 AM</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4 timer">
                          <p>KDS06231</p>
                        </td>
                        <td class="px-6 py-4">
                            <div className=" flex items-center status">
                                <img src={green} alt="green" />
                                <p>Active</p>
                                <img src={bottomArrow} alt="green" />
                            </div>
                        </td>
                      </tr>
                      <tr class="bg-[#F1F6FF] tr-head  ">
                        <td
                          scope="row"
                          class="px-6 py-4"
                        >
                        <p className="sno">01</p>
                        </td>
                        <td class="px-6 py-4">
                          <div className=" flex items-center timer">
                              <img width={28} height={28} src={cg} alt="cg" />
                              <p className="ml-2">Chirag Negi</p>
                          </div>
                        </td>
                        <td class="px-6 py-4 timer"><p>Project Manager</p></td>
                        <td class="px-6 py-4">
                        <div className="flex items-center timer">
                              <img width={28} height={28} src={cg} alt="cg" />
                              <p className="ml-2">Shubham Gupta</p>
                          </div>
                        </td>
                        <td class="px-6 py-4">
                            <div className="reg-date flex items-center">
                                <img src={celes} alt="celes" />
                                <div className="ml-2">
                                    <h4>15 July 2021</h4>
                                    <p>10 : 45 AM</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4 timer">
                          <p>KDS06231</p>
                        </td>
                        <td class="px-6 py-4 relative">
                            <div className="flex items-center status relative">
                                <img src={green} alt="green" />
                                <p>Active</p>
                                <img src={bottomArrow} alt="green" />
                            </div>
                            {/* <div className="action">
                                <div className="edit flex items-center justify-center">
                                  <img width={13} height={11} src={edit1} alt="" />
                                   <p className="ml-2">Edit</p>
                                </div>
                                <div className="delete flex items-center justify-center">
                                   <img width={11} height={11} src={delete1} alt="" />
                                   <p className="ml-2">Delete</p>
                                </div>
                            </div> */}
                        </td>
                      </tr>
                      <tr class="bg-[#F1F6FF] tr-head  ">
                        <td
                          scope="row"
                          class="px-6 py-4"
                        >
                        <p className="sno">01</p>
                        </td>
                        <td class="px-6 py-4">
                          <div className=" flex items-center timer">
                              <img width={28} height={28} src={cg} alt="cg" />
                              <p className="ml-2">Chirag Negi</p>
                          </div>
                        </td>
                        <td class="px-6 py-4 timer"><p>Project Manager</p></td>
                        <td class="px-6 py-4">
                        <div className="flex items-center timer">
                              <img width={28} height={28} src={cg} alt="cg" />
                              <p className="ml-2">Shubham Gupta</p>
                          </div>
                        </td>
                        <td class="px-6 py-4">
                            <div className="reg-date flex items-center">
                                <img src={celes} alt="celes" />
                                <div className="ml-2">
                                    <h4>15 July 2021</h4>
                                    <p>10 : 45 AM</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4 timer">
                          <p>KDS06231</p>
                        </td>
                        <td class="px-6 py-4">
                            <div className=" flex items-center status">
                                <img src={green} alt="green" />
                                <p>Active</p>
                                <img src={bottomArrow} alt="green" />
                            </div>
                        </td>
                      </tr>
                      <tr class="bg-[#F1F6FF] tr-head  ">
                        <td
                          scope="row"
                          class="px-6 py-4"
                        >
                        <p className="sno">01</p>
                        </td>
                        <td class="px-6 py-4">
                          <div className=" flex items-center timer">
                              <img width={28} height={28} src={cg} alt="cg" />
                              <p className="ml-2">Chirag Negi</p>
                          </div>
                        </td>
                        <td class="px-6 py-4 timer"><p>Project Manager</p></td>
                        <td class="px-6 py-4">
                        <div className="flex items-center timer">
                              <img width={28} height={28} src={cg} alt="cg" />
                              <p className="ml-2">Shubham Gupta</p>
                          </div>
                        </td>
                        <td class="px-6 py-4">
                            <div className="reg-date flex items-center">
                                <img src={celes} alt="celes" />
                                <div className="ml-2">
                                    <h4>15 July 2021</h4>
                                    <p>10 : 45 AM</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4 timer">
                          <p>KDS06231</p>
                        </td>
                        <td class="px-6 py-4">
                            <div className=" flex items-center status">
                                <img src={green} alt="green" />
                                <p>Active</p>
                                <img src={bottomArrow} alt="green" />
                            </div>
                        </td>
                      </tr>
                      <tr class="bg-[#F1F6FF] tr-head  ">
                        <td
                          scope="row"
                          class="px-6 py-4"
                        >
                        <p className="sno">01</p>
                        </td>
                        <td class="px-6 py-4">
                          <div className=" flex items-center timer">
                              <img width={28} height={28} src={cg} alt="cg" />
                              <p className="ml-2">Chirag Negi</p>
                          </div>
                        </td>
                        <td class="px-6 py-4 timer"><p>Project Manager</p></td>
                        <td class="px-6 py-4">
                        <div className="flex items-center timer">
                              <img width={28} height={28} src={cg} alt="cg" />
                              <p className="ml-2">Shubham Gupta</p>
                          </div>
                        </td>
                        <td class="px-6 py-4">
                            <div className="reg-date flex items-center">
                                <img src={celes} alt="celes" />
                                <div className="ml-2">
                                    <h4>15 July 2021</h4>
                                    <p>10 : 45 AM</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4 timer">
                          <p>KDS06231</p>
                        </td>
                        <td class="px-6 py-4">
                            <div className=" flex items-center status">
                                <img src={green} alt="green" />
                                <p>Active</p>
                                <img src={bottomArrow} alt="green" />
                            </div>
                        </td>
                      </tr>
                      <tr class="bg-[#F1F6FF] tr-head  ">
                        <td
                          scope="row"
                          class="px-6 py-4"
                        >
                        <p className="sno">01</p>
                        </td>
                        <td class="px-6 py-4">
                          <div className=" flex items-center timer">
                              <img width={28} height={28} src={cg} alt="cg" />
                              <p className="ml-2">Chirag Negi</p>
                          </div>
                        </td>
                        <td class="px-6 py-4 timer"><p>Project Manager</p></td>
                        <td class="px-6 py-4">
                        <div className="flex items-center timer">
                              <img width={28} height={28} src={cg} alt="cg" />
                              <p className="ml-2">Shubham Gupta</p>
                          </div>
                        </td>
                        <td class="px-6 py-4">
                            <div className="reg-date flex items-center">
                                <img src={celes} alt="celes" />
                                <div className="ml-2">
                                    <h4>15 July 2021</h4>
                                    <p>10 : 45 AM</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4 timer">
                          <p>KDS06231</p>
                        </td>
                        <td class="px-6 py-4">
                            <div className=" flex items-center status">
                                <img src={green} alt="green" />
                                <p>Active</p>
                                <img src={bottomArrow} alt="green" />
                            </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowEmployee;
