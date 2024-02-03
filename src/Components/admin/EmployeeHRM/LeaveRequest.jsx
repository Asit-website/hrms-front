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
import write from "../../images/write.png"
import write2 from "../../images/write2.png"
import del from "../../images/del.png"



const LeaveRequest = ({

  pop1,
  setPop1,
  pop,
  setPop,
  setAlert,
  isHr = false,
}) => {
  const { user } = useMain();

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
                  <span className="thml">Leave Request</span>
                </div>
              </div>


{/* second  */}
<main className="leaveReqWrap">

    

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs uppercase textALLtITL ">
        <tr>
                <th scope="col" class="px-6 py-3 uppercase">
                Employee
                </th>
                <th scope="col" class="px-6 py-3 uppercase">
                Leave Type
                </th>
                <th scope="col" class="px-6 py-3 uppercase">
                Applied on
                </th>
                <th scope="col" class="px-6 py-3 uppercase">
                start date
                </th>
                <th scope="col" class="px-6 py-3 uppercase">
                end Date
                </th>
                <th scope="col" class="px-6 py-3 uppercase">
                Total days
                </th>
                <th scope="col" class="px-6 py-3 uppercase">
                leave reason
                </th>
                <th scope="col" class="px-6 py-3 uppercase">
                Status
                </th>
                <th scope="col" class="px-6 py-3 uppercase">
                action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b  ">
                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap taskAns ">
                Surbhi Rajwanshi
                </th>
                <td class="px-6 py-4 taskAns">
                Sick leave        
                   </td>
                <td class="px-6 py-4 taskAns">
                Jan25, 2024
                </td>
                <td class="px-6 py-4 taskAns">
                Jan25, 2024
                </td>
                <td class="px-6 py-4 taskAns">
                Jan27, 2024
                                </td>
                <td class="px-6 py-4 taskAns">
                2
                    </td>
                <td class="px-6 py-4 taskAns">
                Sick Leave
                    </td>
                <td class="px-6 py-4 taskAns">
                Jan25, 2024
                    </td>
    
                <td class="px-6 py-4  flex items-center gap-[10px] ">
               <img src={write} alt=""  />
               <img src={write2} alt="" className="mx-3" />
               <img src={del} alt="" />
                    </td>
    
            </tr>
          
          
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
