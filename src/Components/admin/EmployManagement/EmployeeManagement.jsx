import AdminNavbar from "../../admin/Navbar/AdminNavbar";
import AdminSidebar from "../../admin/Sidebar/AdminSidebar";
import "react-calendar/dist/Calendar.css";
import { useMain } from "../../../hooks/useMain";
import HrSidebar from "../../Hr/Sidebar/HrSidebar";
import HrNavbar from "../../Hr/Navbar/HrNavbar";
import chevron from "../../images/chevron_right.png";
import inbox from "../../images/move_to_inbox.png"
import outbox from "../../images/outbox.png"
import personAdd from "../../images/person_add.png"

import "./employeManage.css";
import { useNavigate } from "react-router-dom";


const emplyData = [
    {
        employeId : "#EMP0000001",
        name:"Surbhi Rajwanshi",
        email:"Surbhi@kusheldigi.com",
        branch:"Head Office",
        department:"Developer",
        designation:"Developer"
    },
    
    {
        employeId : "#EMP0000001",
        name:"Surbhi Rajwanshi",
        email:"Surbhi@kusheldigi.com",
        branch:"Head Office",
        department:"Developer",
        designation:"Developer"
    },
    {
        employeId : "#EMP0000001",
        name:"Surbhi Rajwanshi",
        email:"Surbhi@kusheldigi.com",
        branch:"Head Office",
        department:"Developer",
        designation:"Developer"
    },
    {
        employeId : "#EMP0000001",
        name:"Surbhi Rajwanshi",
        email:"Surbhi@kusheldigi.com",
        branch:"Head Office",
        department:"Developer",
        designation:"Developer"
    },
    {
        employeId : "#EMP0000001",
        name:"Surbhi Rajwanshi",
        email:"Surbhi@kusheldigi.com",
        branch:"Head Office",
        department:"Developer",
        designation:"Developer"
    },
    {
        employeId : "#EMP0000001",
        name:"Surbhi Rajwanshi",
        email:"Surbhi@kusheldigi.com",
        branch:"Head Office",
        department:"Developer",
        designation:"Developer"
    },

]

const EmployeeManagement = ({
  pop1,
  setPop1,
  pop,
  setPop,
  setAlert,
  isHr = false,
}) => {
  const { user } = useMain();

  const navigate = useNavigate();

  

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
                <p className="hrmHed">HRMS</p>

                <div className="hrDSPAwRAP">

             

                <div className="hrDsPa">
                  <p className="hrFirDs">HRMS</p>{" "}
                  <span>
                    <img src={chevron} alt="" />
                  </span>{" "}
                  <span className="thml">Employee Management</span>
                </div>

                <div className="inObPerAd">
                  <img src={inbox} alt="" />
                  <img src={outbox} alt="" />
                  <img src={personAdd} alt="" />
                </div>

                </div>


              </div>

              {/* second */}
              <main className="creteEmpWrap">
                <div class="relative overflow-x-auto w-full">
                  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                    <thead class="text-xs uppercase textALLtITL ">
                      <tr>
                        <th scope="col" class="px-6 py-3 taskTitl ">
                        EMPLOYEE ID
                        </th>
                        <th scope="col" class="px-6 py-3 taskTitl ">
                        NAME
                        </th>
                        <th scope="col" class="px-6 py-3 taskTitl ">
                          EMAIL
                        </th>

                        <th scope="col" class="px-6 py-3 taskTitl ">
                          BRANCH
                        </th>
                        <th scope="col" class="px-6 py-3 taskTitl ">
                          DEPARTMENT
                        </th>
                        <th scope="col" class="px-6 py-3 taskTitl ">
                          DESIGNATION
                        </th>
                        <th scope="col" class="px-6 py-3 taskTitl ">
                        date of joining
                        </th>
                        <th scope="col" class="px-6 py-3 taskTitl ">
                        Last login
                        </th>
                        <th scope="col" class="px-6 py-3 taskTitl ">
                        active
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                        {
                            emplyData?.map((item ,index)=>(
                                <tr  onClick={() => navigate(`/adminDash/HRM/EmployeeManagement/${item.employeId.replace('#', '')}`)} key={index} className="bg-white border-b">

                        <th scope="row" class="px-6 py-4  taskAns employId "><span className=" cursor-pointer">{item?.employeId}</span> </th>
                        <td class="px-6 py-4 taskAns">{item?.name}</td>
                        <td class="px-6 py-4 taskAns">{item?.email}</td>
                        <td class="px-6 py-4 taskAns">{item?.branch}</td>
                        <td class="px-6 py-4 taskAns">{item?.department}</td>
                        <td class="px-6 py-4 taskAns">{item?.designation}</td>
                       
                      </tr> 
                            ))
                        }
                    

                 
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

export default EmployeeManagement;
