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
            <Route path="/login" element={<Auth setAlert={setAlert} />} />
            <Route path="/forget" element={<ForgetPassword />} />
            <Route path="/forget1" element={<ForgetPassword1/>}/>
            <Route path="/forget2" element={<ForgetPassword2/>}/>
            {/* =================Employee routing=========== */}
            <Route
              element={<PrivateRoute role={[ROLES.EMPLOYEE, ROLES.ADMIN]} />}
            >
              <Route
                path="/employeeDash"
                element={
                  <EmployeeDash
                    setAlert={setAlert}
                    // task={task}
                    // setTask={setTask}
                  />
                }
              />
            </Route>

            {/* ====================hr routing============== */}
            <Route element={<PrivateRoute role={[ROLES.HR, ROLES.ADMIN]} />}>
              <Route
                path="/hrDash"
                element={<HrDashboard setAlert={setAlert} />}
              />
            </Route>

            {/* ================admin routing===================== */}
            <Route element={<PrivateRoute role={[ROLES.ADMIN]} />}>
              <Route
                path="/adminDash"
                element={<AdminDash setAlert={setAlert} />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </MainState>
      {/* <Auth/> */}
    </>
  );
}

export default App;
