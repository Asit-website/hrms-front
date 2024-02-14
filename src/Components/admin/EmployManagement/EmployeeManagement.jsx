import AdminNavbar from "../../admin/Navbar/AdminNavbar";
import React, { useState, useEffect } from "react";
import AdminSidebar from "../../admin/Sidebar/AdminSidebar";
import "react-calendar/dist/Calendar.css";
import { useMain } from "../../../hooks/useMain";
import HrSidebar from "../../Hr/Sidebar/HrSidebar";
import HrNavbar from "../../Hr/Navbar/HrNavbar";
import chevron from "../../images/chevron_right.png";
import inbox from "../../images/move_to_inbox.png"
import outbox from "../../images/outbox.png"
import personAdd from "../../images/person_add.png"
import Calendar from "react-calendar";
import "./employeManage.css";
import { useNavigate } from "react-router-dom";


// const emplyData = [
//     {
//         employeId : "#EMP0000001",
//         name:"Surbhi Rajwanshi",
//         email:"Surbhi@kusheldigi.com",
//         branch:"Head Office",
//         department:"Developer",
//         designation:"Developer",
//         date_of_joining:" Sep 1, 2023",
//         Last_login:"2024-1-29 10:43:55",
//         active:""
//     },


//     {
//         employeId : "#EMP0000001",
//         name:"Surbhi Rajwanshi",
//         email:"Surbhi@kusheldigi.com",
//         branch:"Head Office",
//         department:"Developer",
//         designation:"Developer",
//         date_of_joining:" Sep 1, 2023",
//         Last_login:"2024-1-29 10:43:55",
//         active:""
//     },
//     {
//         employeId : "#EMP0000001",
//         name:"Surbhi Rajwanshi",
//         email:"Surbhi@kusheldigi.com",
//         branch:"Head Office",
//         department:"Developer",
//         designation:"Developer",
//         date_of_joining:" Sep 1, 2023",
//         Last_login:"2024-1-29 10:43:55",
//         active:""
//     },
//     {
//         employeId : "#EMP0000001",
//         name:"Surbhi Rajwanshi",
//         email:"Surbhi@kusheldigi.com",
//         branch:"Head Office",
//         department:"Developer",
//         designation:"Developer",
//         date_of_joining:" Sep 1, 2023",
//         Last_login:"2024-1-29 10:43:55",
//         active:""
//     },
//     {
//         employeId : "#EMP0000001",
//         name:"Surbhi Rajwanshi",
//         email:"Surbhi@kusheldigi.com",
//         branch:"Head Office",
//         department:"Developer",
//         designation:"Developer",
//         date_of_joining:" Sep 1, 2023",
//         Last_login:"2024-1-29 10:43:55",
//         active:""
//     },
//     {
//         employeId : "#EMP0000001",
//         name:"Surbhi Rajwanshi",
//         email:"Surbhi@kusheldigi.com",
//         branch:"Head Office",
//         department:"Developer",
//         designation:"Developer",
//         date_of_joining:" Sep 1, 2023",
//         Last_login:"2024-1-29 10:43:55",
//         active:""
//     },

// ]

const EmployeeManagement = ({
  pop1,
  setPop1,
  pop,
  setPop,
  setAlert,
  isHr = false,
}) => {
  // const { user } = useMain();

  const navigate = useNavigate();

  let todayDate = new Date().toLocaleDateString();

  const { user, getUsers, getActivitiesByUser } = useMain();

  const [data, setData] = useState([])

  const [value, onChange] = useState(new Date());
  const [loadFlag, setLoadFlag] = useState(false);
  const [mainData, setMainData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const ans = await getUsers();
    console.log(ans);
    setData(ans.data);
  };


  useEffect(() => {
    getData1(todayDate);
  }, []);

  const getData1 = async (date) => {
    setLoadFlag(true);
    const data = await getActivitiesByUser(date, '', '', 0, 10, '');
    console.log(data.data[0]);
    setMainData(data.data[0]);
    setLoadFlag(false);
  };

  const handleCalendar = (e) => {
    let date = new Date(e).toLocaleDateString();
    // console.log(date);
    getData(date);
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
                        // onClick={() => navigate(`/adminDash/HRM/EmployeeManagement/${item.employeId.replace('#', '')}`)}
                        data?.map((item, index) => (
                          // let slice1 = slice()
                          <tr key={index} className="bg-white border-b">
                            <th scope="row" class="px-6 py-4  taskAns employId "><span className=" cursor-pointer">{(item._id).slice(0, 5)}</span> </th>
                            <td class="px-6 py-4 taskAns">{item?.fullName}</td>
                            <td class="px-6 py-4 taskAns">{item?.email}</td>
                            <td class="px-6 py-4 taskAns">{item?.branch}</td>
                            <td class="px-6 py-4 taskAns">{item?.department}</td>
                            <td class="px-6 py-4 taskAns">{item?.designation}</td>
                            <td class="px-6 py-4 taskAns">{item?.joiningDate}</td>
                            {

                              !loadFlag ? <> <td id={item._id} class="px-6 py-4 taskAns">{mainData && Object.keys(mainData).length > 0 && mainData.activity[mainData.activity.length - 1].message !== "" ? new Date(mainData.activity[mainData.activity.length - 1].ts).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) : " - : -"}</td>
                                <td class="px-6 py-4 taskAns">{item?.active}</td></> : null

                            }

                          </tr>
                        ))
                      }



                    </tbody>
                  </table>
                  {/* <Calendar onChange={handleCalendar} value={value} /> */}
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
