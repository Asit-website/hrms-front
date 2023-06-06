import React from "react";
import HrSidebar from "../Sidebar/HrSidebar";
import HrNavbar from "../Navbar/HrNavbar";
import cg from "../../images/cg.png";
import celes from "../../images/celes.png";
import green from "../../images/green.png";
import bottomArrow from "../../images/bottomArrow.png";
import edit1 from "../../images/edit1.png";
import delete1 from "../../images/delete1.png";
const ShowEmployee1 = ({ setAlert }) => {
     const toggleMenu = () => {
    document.querySelector(".menus").classList.toggle('hidden');
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
                <div className="relative overflow-x-auto overhidding overhidding1">
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
                        <td scope="row" class="px-6 py-4">
                          <p className="sno">01</p>
                        </td>
                        <td class="px-6 py-4">
                          <div className=" flex items-center timer">
                            <img width={28} height={28} src={cg} alt="cg" />
                            <p className="ml-2">Chirag Negi</p>
                          </div>
                        </td>
                        <td class="px-6 py-4 timer">
                          <p>Project Manager</p>
                        </td>
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
                        <td scope="row" class="px-6 py-4">
                          <p className="sno">01</p>
                        </td>
                        <td class="px-6 py-4">
                          <div className=" flex items-center timer">
                            <img width={28} height={28} src={cg} alt="cg" />
                            <p className="ml-2">Chirag Negi</p>
                          </div>
                        </td>
                        <td class="px-6 py-4 timer">
                          <p>Project Manager</p>
                        </td>
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
                        <td scope="row" class="px-6 py-4">
                          <p className="sno">01</p>
                        </td>
                        <td class="px-6 py-4">
                          <div className=" flex items-center timer">
                            <img width={28} height={28} src={cg} alt="cg" />
                            <p className="ml-2">Chirag Negi</p>
                          </div>
                        </td>
                        <td class="px-6 py-4 timer">
                          <p>Project Manager</p>
                        </td>
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
                        <td class="px-6 py-4 relative"
                         
                        >
                          <div className="flex items-center status relative"
                             onClick={()=> toggleMenu()}
                          >
                            <img src={green} alt="green" />
                            <p>Active</p>
                            <img src={bottomArrow} alt="green" />
                          </div>
                          <div className="action menus hidden menu-0">
                            <div className="edit flex items-center justify-center">
                              <img width={13} height={11} src={edit1} alt="" />
                              <p className="ml-2">Edit</p>
                            </div>
                            <div className="delete flex items-center justify-center">
                              <img
                                width={11}
                                height={11}
                                src={delete1}
                                alt=""
                              />
                              <p className="ml-2">Delete</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-[#F1F6FF] tr-head  ">
                        <td scope="row" class="px-6 py-4">
                          <p className="sno">01</p>
                        </td>
                        <td class="px-6 py-4">
                          <div className=" flex items-center timer">
                            <img width={28} height={28} src={cg} alt="cg" />
                            <p className="ml-2">Chirag Negi</p>
                          </div>
                        </td>
                        <td class="px-6 py-4 timer">
                          <p>Project Manager</p>
                        </td>
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
                        <td scope="row" class="px-6 py-4">
                          <p className="sno">01</p>
                        </td>
                        <td class="px-6 py-4">
                          <div className=" flex items-center timer">
                            <img width={28} height={28} src={cg} alt="cg" />
                            <p className="ml-2">Chirag Negi</p>
                          </div>
                        </td>
                        <td class="px-6 py-4 timer">
                          <p>Project Manager</p>
                        </td>
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
                        <td scope="row" class="px-6 py-4">
                          <p className="sno">01</p>
                        </td>
                        <td class="px-6 py-4">
                          <div className=" flex items-center timer">
                            <img width={28} height={28} src={cg} alt="cg" />
                            <p className="ml-2">Chirag Negi</p>
                          </div>
                        </td>
                        <td class="px-6 py-4 timer">
                          <p>Project Manager</p>
                        </td>
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
                        <td scope="row" class="px-6 py-4">
                          <p className="sno">01</p>
                        </td>
                        <td class="px-6 py-4">
                          <div className=" flex items-center timer">
                            <img width={28} height={28} src={cg} alt="cg" />
                            <p className="ml-2">Chirag Negi</p>
                          </div>
                        </td>
                        <td class="px-6 py-4 timer">
                          <p>Project Manager</p>
                        </td>
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

export default ShowEmployee1;
