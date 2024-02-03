import AdminNavbar from "../../admin/Navbar/AdminNavbar";
import AdminSidebar from "../../admin/Sidebar/AdminSidebar";
import "react-calendar/dist/Calendar.css";
import { useMain } from "../../../hooks/useMain";
import HrSidebar from "../../Hr/Sidebar/HrSidebar";
import HrNavbar from "../../Hr/Navbar/HrNavbar";
import chevron from "../../images/chevron_right.png";
import emplyee from "../../images/emplyProfile.png"
import call from "../../images/call.png"
import mail from "../../images/mail.png"


import "./hrm.css";
import "./totalEmploy.css"
import { NavLink } from "react-router-dom";



const TotalEmployee = ({
  pop1,
  setPop1,
  pop,
  setPop,
  setAlert,
  isHr = false,
}) => {
  const { user } = useMain();

  const data = [
    {
        profile: emplyee,
        name:"Surbhi Rajwanshi",
        title:"Project Manager",
        email:"Surbhi@kusheldigi.com",
        phoneNumber:"9873******",
        department:"Developer",
        dateOfJoin:"02 March,2022"
    },
    {
        profile: emplyee,
        name:"Surbhi Rajwanshi",
        title:"Project Manager",
        email:"Surbhi@kusheldigi.com",
        phoneNumber:"9873******",
        department:"Developer",
        dateOfJoin:"02 March,2022"
    },
    {
        profile: emplyee,
        name:"Surbhi Rajwanshi",
        title:"Project Manager",
        email:"Surbhi@kusheldigi.com",
        phoneNumber:"9873******",
        department:"Developer",
        dateOfJoin:"02 March,2022"
    },
    {
        profile: emplyee,
        name:"Surbhi Rajwanshi",
        title:"Project Manager",
        email:"Surbhi@kusheldigi.com",
        phoneNumber:"9873******",
        department:"Developer",
        dateOfJoin:"02 March,2022"
    },
    {
        profile: emplyee,
        name:"Surbhi Rajwanshi",
        title:"Project Manager",
        email:"Surbhi@kusheldigi.com",
        phoneNumber:"9873******",
        department:"Developer",
        dateOfJoin:"02 March,2022"
    },
    {
        profile: emplyee,
        name:"Surbhi Rajwanshi",
        title:"Project Manager",
        email:"Surbhi@kusheldigi.com",
        phoneNumber:"9873******",
        department:"Developer",
        dateOfJoin:"02 March,2022"
    },
    {
        profile: emplyee,
        name:"Surbhi Rajwanshi",
        title:"Project Manager",
        email:"Surbhi@kusheldigi.com",
        phoneNumber:"9873******",
        department:"Developer",
        dateOfJoin:"02 March,2022"
    },
    {
        profile: emplyee,
        name:"Surbhi Rajwanshi",
        title:"Project Manager",
        email:"Surbhi@kusheldigi.com",
        phoneNumber:"9873******",
        department:"Developer",
        dateOfJoin:"02 March,2022"
    },
    {
        profile: emplyee,
        name:"Surbhi Rajwanshi",
        title:"Project Manager",
        email:"Surbhi@kusheldigi.com",
        phoneNumber:"9873******",
        department:"Developer",
        dateOfJoin:"02 March,2022"
    },
    {
        profile: emplyee,
        name:"Surbhi Rajwanshi",
        title:"Project Manager",
        email:"Surbhi@kusheldigi.com",
        phoneNumber:"9873******",
        department:"Developer",
        dateOfJoin:"02 March,2022"
    },
    {
        profile: emplyee,
        name:"Surbhi Rajwanshi",
        title:"Project Manager",
        email:"Surbhi@kusheldigi.com",
        phoneNumber:"9873******",
        department:"Developer",
        dateOfJoin:"02 March,2022"
    },
    {
        profile: emplyee,
        name:"Surbhi Rajwanshi",
        title:"Project Manager",
        email:"Surbhi@kusheldigi.com",
        phoneNumber:"9873******",
        department:"Developer",
        dateOfJoin:"02 March,2022"
    },
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

                  <span  className="hrFirDs">HRM</span>
</NavLink>
                  
                  <span>
                    <img src={chevron} alt="" />
                  </span>{" "}

                  <span className="thml">Total Employees</span>

                </div>

              </div>

{/* second */}
             <main className="totalEmpl">
             {
                data?.map((employ , index)=>(
                    <div key={index} className="singl_Emply">

                             <div className="singEmp_profile">

                        <img src={employ?.profile} alt="" />
                           <h2>{employ?.name}</h2>
                           <p>{employ?.title}</p>
                             </div>

                             <div className="empEmail_phn">
                                <p><img src={mail} alt="" /> <span>{employ?.email}</span></p>
                                <p><img src={call} alt="" /> <span>{employ?.phoneNumber}</span></p>
                             </div>

                             <div className="empDep_join">
                                <p>
                                    <span>Department</span>
                                    <span className="sns">{employ?.department}</span>
                                </p>
                                <p>
                                    <span>Date of Joining</span>
                                    <span className="sns">{employ?.dateOfJoin}</span>
                                </p>
                             </div>

                    </div>
                ))
             }

             </main>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalEmployee;
