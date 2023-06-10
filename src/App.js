import { useState } from "react";
import "./App.css";
import Auth from "./Components/auth/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgetPassword from "./Components/auth/ForgetPassword";
import ForgetPassword1 from "./Components/auth/ForgetPassword1";
import MainState from "./context/MainState";
import Alert from "./Components/Alert/Alert";
import PrivateRoute from "./privateRoute/PrivateRoute";
import EmployeeDash from "./Components/Employee/Dashboard/EmployeeDash";
import HrDashboard from "./Components/Hr/Dashboard/HrDashboard";
import AdminDash from "./Components/admin/Dashboard/AdminDash";
import ForgetPassword2 from "./Components/auth/ForgetPassword2";
import Home from "./Components/Home";
import EmployeeManage from "./Components/admin/EmployeeManage/EmployeeManage";
import Request from "./Components/Employee/Request/Request";
import UpdateProfile from "./Components/Employee/Profile/UpdateProfile";
import AdminProfile from "./Components/admin/AdminProfile/AdminProfile";
import HrManage from "./Components/admin/HrManage/HrManage";
import EmployeeManageByHr from "./Components/Hr/EmployeeManageHr/EmployeeManageByHr";
import ShowEmployee from "./Components/Hr/ShownEmployee.js/ShowEmployee";
import ShowEmployee1 from "./Components/Hr/ShownEmployee.js/ShowEmployee1";
import UpdateProfileHr from "./Components/Hr/UpdateProfileHr/UpdateProfileHr";
import AttendenceCalendar from "./Components/Employee/Request/AttendenceCalendar";

var tc;
const ROLES = {
  EMPLOYEE: "EMPLOYEE",
  HR: "HR",
  ADMIN: "ADMIN",
};
function App() {
  const [alertValue, setAlertValue] = useState({
    show: false,
    color: "",
    message: "",
  });

  const [pop,setPop] = useState(false);

  const setAlert = (color, message) => {
    // console.log(color, message);
    setAlertValue({
      color,
      message,
      show: true,
    });

    clearTimeout(tc);
    tc = setTimeout(() => {
      setAlertValue({
        color: "",
        message: "",
        show: false,
      });
    }, 3000);
  };

  const closeAlert = () => {
    clearTimeout(tc);
    setAlertValue({
      color: "",
      message: "",
      show: false,
    });
  };
  return (
    <>
      <MainState>
        <BrowserRouter>
          {alertValue.show ? (
            <Alert
              color={alertValue.color}
              message={alertValue.message}
              closeAlert={closeAlert}
            />
          ) : null}
          <Routes>
            <Route path="/" element={<Home setAlert={setAlert}/>}/>
            <Route path="/login" element={<Auth setAlert={setAlert} />} />
            <Route path="/forget" element={<ForgetPassword   setAlert={setAlert} />} />
            <Route path="/forget1" element={<ForgetPassword1 setAlert={setAlert}/>}/>
            <Route path="/forget2" element={<ForgetPassword2 setAlert={setAlert}/>}/>
            {/* =================Employee routing=========== */}
            <Route
              element={<PrivateRoute role={[ROLES.EMPLOYEE, ROLES.ADMIN]} />}
            >
              <Route
                path="/employeeDash"
                element={
                  <EmployeeDash
                    setAlert={setAlert}
                  />
                }
              />

              <Route path="/employeeDash/request" element={<Request setAlert={setAlert}/>} />
              <Route path="/employeeDash/update" element={<UpdateProfile setAlert={setAlert}/>}/>
              <Route path="/employeeDash/atten" element={<AttendenceCalendar setAlert={setAlert}/>}/>
            </Route>

            {/* ====================hr routing============== */}
            <Route element={<PrivateRoute role={[ROLES.HR, ROLES.ADMIN]} />}>
              <Route
                path="/hrDash"
                element={<HrDashboard setAlert={setAlert} />}
              />
              {/* <Route path="/hrDash/EmployeeReg" element={<EmployeeManageByHr setAlert={setAlert}/>}/> */}
              <Route path="/hrDash/EmployeeReg" element={<EmployeeManage setAlert={setAlert} pop={pop} setPop={setPop}/>}/>
              <Route path="/hrDash/EmployeeReg/:id" element={<EmployeeManage setAlert={setAlert} pop={pop} setPop={setPop}/>}/>
              <Route path="/hrDash/EmployeeMan" element={<ShowEmployee setAlert={setAlert}/>}/>
              <Route path="/hrDash/EmployeeMan1" element={<ShowEmployee1 setAlert={setAlert}/>}/>
              <Route path="/hrDash/profile" element={<UpdateProfileHr setAlert={setAlert}/>}/>
            </Route>

            {/* ================admin routing===================== */}
            <Route element={<PrivateRoute role={[ROLES.ADMIN]} />}>
              <Route
                path="/adminDash"
                element={<AdminDash pop={pop} setPop={setPop} setAlert={setAlert} />}
              />
              <Route path="/adminDash/EmployeeMan" element={<EmployeeManage pop={pop} setPop={setPop} setAlert={setAlert} />}/>
              <Route path="/adminDash/HrManage" element={<HrManage pop={pop} setAlert={setAlert} setPop={setPop}/>}/>
              <Route path="/adminDash/profile" element={<AdminProfile pop={pop} setPop={setPop} setAlert={setAlert}/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </MainState>
      {/* <Auth/> */}
    </>
  );
}

export default App;
