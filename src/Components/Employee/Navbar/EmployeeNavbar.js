import React, { useState } from "react";
import thir from "../../images/thir.png";
import lok from "../../images/lok.png";
import bottom from "../../images/bottom.png";
import bell from "../../images/bell.png";
import OutsideClickHandler from "react-outside-click-handler";
import { NavLink } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
var tc;
var tc2;
const EmployeeNavbar = ({
  user,
  setAlert,
  postActivity,
  getStatisticsByUser,
}) => {
  const [pass, setPass] = useState(false);
  const stylePeer = {
    display: pass ? "block" : "none",
  };
  const updateUser = () => {
    document.getElementById("ty").classList.toggle("tys");
  };
  const handleLogout = () => {
   if(timer!=0){
      alert("you cant logout")
   }
   else{
     localStorage.removeItem("hrms_token");
     localStorage.removeItem("hrms_user");
     window.location.href = "/login";
     setAlert("success", "logout successfully");
   }
  };

  const [startTs, setStartTs] = useState("");
  var [percentageDone, setPercentageDone] = useState(0);

  var [timer, setTimer] = useState(0);

  var [progressTimer, setProgressTimer] = useState(0);

  var [breakTimer, setBreakTimer] = useState(0);

  var [overTimeTimer, setOverTimeTimer] = useState(0);

  const [punchLog, setPunchLog] = useState({});
  const [punchFlag, setPunchFlag] = useState(false);
  const [statistics, setStatistics] = useState([]);

  const getStatistics = async () => {
    const ans = await getStatisticsByUser();
  
    setStatistics(ans.data);
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const punchBtn = async (e) => {
    setPass(!pass);
    if (e.target.innerText === "Clock In") {
      e.target.innerText = "Clock Out";
      clearInterval(tc2);

      if (startTs === "") {
        setStartTs(new Date().getTime());
      }

      tc = setInterval(() => {
        if (progressTimer === 480) {
          setOverTimeTimer(++overTimeTimer);
        } else {
          setTimer(++timer);
          setProgressTimer(++progressTimer);
          setPercentageDone((progressTimer / 480) * 100);
        }
      }, 60 * 1000);

      let status = "ONLINE";
      let date = `${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/${new Date().getFullYear()}`;
     
      let activity = {
        type: "PUNCH_IN",
        ts: new Date().getTime(),
      };

      let tempActivity = localStorage.getItem("tempActivity");
      if (tempActivity) {
        tempActivity = JSON.parse(tempActivity);
        if (!tempActivity[new Date().getDate()]) {
         
          localStorage.removeItem("tempActivity");
          tempActivity = { [new Date().getDate()]: [] };
        }
      } else {
        tempActivity = { [new Date().getDate()]: [] };
      }

      tempActivity[new Date().getDate()].push(activity);
      localStorage.setItem("tempActivity", JSON.stringify(tempActivity));

      setPunchFlag(!punchFlag);

      const ans = await postActivity({
        date,
        activity,
        breaks: breakTimer,
        overtime: overTimeTimer,
        hours: timer,
        status,
      });
      console.log(ans);
    } else {
      e.target.innerText = "Clock In";
      clearInterval(tc);

      tc2 = setInterval(() => {
        setBreakTimer(++breakTimer);
      }, 60 * 1000);

      let status = "OFFLINE";
      let date = `${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/${new Date().getFullYear()}`;
      let activity = {
        type: "PUNCH_OUT",
        ts: new Date().getTime(),
      };

      let tempActivity = JSON.parse(localStorage.getItem("tempActivity"));
      if (!tempActivity[new Date().getDate()]) {
        localStorage.removeItem("tempActivity");
      } else {
        tempActivity[new Date().getDate()].push(activity);
      }
      localStorage.setItem("tempActivity", JSON.stringify(tempActivity));
      setPunchFlag(!punchFlag);
      const ans = await postActivity({
        date,
        activity,
        breaks: breakTimer,
        overtime: overTimeTimer,
        hours: timer,
        status,
      });
      console.log(ans);
    }
  };

  
  return (
    <>
      <div className="Employee-nav w-full">
        <div className="second-logo flex items-center">
          <img src={thir} alt="" />
          <p className="ml-2">Good Morning {user?.fullName}</p>
        </div>
        <div className="third-logo ">
          <input
            type="search"
            placeholder="Search for actions, pages, requests, report* people..."
          />
        </div>
        <div className="fourth-logo ">
          <button onClick={punchBtn}>Clock In</button>
        </div>
        <div style={stylePeer}>
          <CircularProgressbar
            value={percentageDone}
            text={`${("0" + Math.floor(timer / 60)).slice(-2)}:${(
              "0" +
              (timer % 60)
            ).slice(-2)} hrs`}
            styles={buildStyles({
              strokeLinecap: "round",
              pathTransitionDuration: 0.5,
              pathColor: `#EC7165`,
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          />
          {/* <div className="flex items-center justify-center ">
            <p className="mr-1">HOURS</p>
            <p className="ml-1">MIN</p>
          </div> */}
        </div>
        <div className="fifth-logo ">
          <img src={bell} alt="" />
        </div>

        <OutsideClickHandler
          onOutsideClick={() => {
            document.getElementById("ty").classList.remove("tys") &&
              document.getElementById("ty").classList.add("kys");
          }}
        >
          <div className="relative cursor-pointer" onClick={updateUser}>
            <div className="sixth-logo flex items-center relative ">
              <img className="john" src={lok} alt="lok" />
              <p className="ml-2.5">{user?.fullName}</p>
              <img className="ml-2.5 bottom" src={bottom} alt="bottom" />
            </div>
            <div id="ty" className="bg-white w-40 absolute user-profile hidden">
              <p onClick={handleLogout} className=" text-center">
                Logout
              </p>
              <NavLink to="/employeeDash/update">
                <p className=" text-center">Edit Profile</p>
              </NavLink>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </>
  );
};

export default EmployeeNavbar;
