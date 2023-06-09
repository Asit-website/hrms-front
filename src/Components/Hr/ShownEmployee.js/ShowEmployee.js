import React, { useEffect, useState } from "react";
import HrSidebar from "../Sidebar/HrSidebar";
import HrNavbar from "../Navbar/HrNavbar";
import hrLok from "../../images/hrLok.png";
import hrLok1 from "../../images/hrLok1.png";
import cg from '../../images/cg.png';
import celes from '../../images/celes.png';
import green from '../../images/green.png';
import bottomArrow from '../../images/bottomArrow.png';
import { NavLink } from "react-router-dom";
import { useMain } from "../../../hooks/useMain";

const ShowEmployee = ({ setAlert }) => {
  const { getUsers } = useMain();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const ans = await getUsers();
    // console.log(ans);
    setData(ans.data);
  };

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
                      {data.map((e, index) => {
                        return (
                          <tr key={index} class="bg-[#F1F6FF] tr-head ">
                            <td
                              scope="row"
                              class="px-6 py-4"
                            >
                              <p className="sno">{('0' + index + 1).slice(-2)}</p>
                            </td>
                            <td class="px-6 py-4">
                              <div className=" flex items-center timer">
                                <img width={28} height={28} src={cg} alt="cg" />
                                <p className="ml-2">{e.fullName}</p>
                              </div>
                            </td>
                            <td class="px-6 py-4 timer"><p>{e.designation}</p></td>
                            <td class="px-6 py-4">
                              <div className="flex items-center timer">
                                <img width={28} height={28} src={cg} alt="cg" />
                                <p className="ml-2">{e.reportingManager}</p>
                              </div>
                            </td>
                            <td class="px-6 py-4">
                              <div className="reg-date flex items-center">
                                <img src={celes} alt="celes" />
                                <div className="ml-2">
                                  <h4>{e.joiningDate}</h4>
                                  {/* <p>10 : 45 AM</p> */}
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 timer">
                              <p>KDS{e?.employeeCode}</p>
                            </td>
                            <td class="px-6 py-4">
                              <div className=" flex items-center status">
                                <img src={green} alt="green" />
                                <p>{e.status === "OFFLINE" ? "Inactive" : "Active"}</p>
                                <img src={bottomArrow} alt="green" />
                              </div>
                            </td>
                          </tr>
                        );
                      })}
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
