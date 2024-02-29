import AdminNavbar from "../../admin/Navbar/AdminNavbar";
import AdminSidebar from "../../admin/Sidebar/AdminSidebar";
import "react-calendar/dist/Calendar.css";
import { useMain } from "../../../hooks/useMain";
import HrSidebar from "../../Hr/Sidebar/HrSidebar";
import HrNavbar from "../../Hr/Navbar/HrNavbar";
import chevron from "../../images/chevron_right.png";
import "./hrm.css";
import "./leaveReq.css";
import "./markAttendance.css"
import { NavLink } from "react-router-dom";
import search22 from "../../images/search22.png"
import restart from "../../images/restart_alt.png"
import srch2 from "../../images/srch2.png"
import moreVert from "../../images/more_vert.png"



const MarkAttendance = ({

  pop1,
  setPop1,
  pop,
  setPop,
  setAlert,
  isHr = false,
}) => {
  const { user } = useMain();

  const ans = [
    {
        employee:"Surbhi Rajwanshi",
        date:"Jan25, 2024",
        status:"Present",
        clockIn:"09:00:00",
        clockOut:"18:00:00",
        late:"00:00:00",
        overtime:"00:00:00"
    }
  ]

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


              {/* second  */}
              <div className="marSecond">


               {/* left  */}
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
               </div>

{/* right */}
               <div className="maDSrIGH">

                <select name="" id="">
                     <option value="Select Branch">Select Branch</option>
                </select>

                <select name="" id="">
                     <option value="Select Branch">Select Department</option>
                </select>

                <div className="resSeBtn">

                <img src={search22} alt="" />
                <img src={restart} alt="" />

                </div>

               </div>

              </div>


 <main className="MarkAtMain">


<div className="marknav">

{/* left */}
<div className="marNavLef">

    <select name="" id="">
        <option value="">10</option>
    </select>

    <span>entries per page</span>

</div>

{/* right  */}
<div className="marNavRight">
 <img src={srch2} alt="" />
 <input type="text" placeholder="search..." />
</div>

</div>

{/* table */}

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 currentText">
                Employee
                </th>
                <th scope="col" class="px-6 py-3 currentText">
                Date
                </th>
                <th scope="col" class="px-6 py-3 currentText">
                Status
                </th>
                <th scope="col" class="px-6 py-3 currentText">
                clock In
                </th>
                <th scope="col" class="px-6 py-3 currentText">
                clock out
                </th>
                <th scope="col" class="px-6 py-3 currentText">
                Late
                </th>
                <th scope="col" class="px-6 py-3 currentText">
                Overtime
                </th>
                <th scope="col" class="px-6 py-3 currentText">
                action
                </th>
            </tr>
        </thead>
        <tbody>
           

           {
            ans.map((item ,index)=>(
                <tr key={index} class="bg-white ">
              
                <td class="px-6 py-4 itemANs">
                    {item.employee}
                </td>
                <td class="px-6 py-4 itemANs">
                    {item.date}
                </td>
              
                <td class="px-6 py-4 itemANs">
                    {item.status}
                </td>
                <td class="px-6 py-4 itemANs">
                    {item.clockIn}
                </td>
              
                <td class="px-6 py-4 itemANs">
                    {item.clockOut}
                </td> 
                <td class="px-6 py-4 itemANs">
                    {item.late}
                </td>
                <td class="px-6 py-4 itemANs">
                    {item.overtime}
                </td>
                <td class="px-6 py-4 ">
                    <img src={moreVert} alt="" />
                </td>
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

export default MarkAttendance;
