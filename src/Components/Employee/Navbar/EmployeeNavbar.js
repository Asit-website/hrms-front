import React, { useState } from "react";
import thir from "../../images/thir.png";
import lok from "../../images/lok.png";
import bottom from "../../images/bottom.png";
import bell from "../../images/bell.png";
import bottomji from '../../images/bottomji.png';
import OutsideClickHandler from "react-outside-click-handler";
import brake from '../../images/break.png';
import logout from '../../images/logout.png';
import { NavLink } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import LogoutPop from "../Popup/LogoutPop";

var tc;
var tc2;

const EmployeeNavbar = ({ user, setAlert, postActivity, getStatisticsByUser, pop1, setPop1 }) => {
  const [pass, setPass] = useState(false);
  const [pass1, setPass1] = useState(false);
  const stylePeer = {
    display: pass ? "block" : "none",
  };

  const stylePeer1 = {
    display: pass1 ? "block" : "none",
  };

  const bottomta = () => {
    setPass1(true);
    document.getElementById("fg").style.display = "none";
    document.getElementById("sg").style.display = "block";
  };

  const bottomta1 = () => {
    setPass1(false);
    document.getElementById("fg").style.display = "block";
    document.getElementById("sg").style.display = "none";
  };

  const updateUser = () => {
    document.getElementById("ty").classList.toggle("tys");
  };

  const handleLogout = () => {
    if (timer != 0) {
      alert("you cant logout");
    } else {
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

  // var [overTimeTimer, setOverTimeTimer] = useState(0);

  const [punchLog, setPunchLog] = useState({});
  const [punchFlag, setPunchFlag] = useState(false);
  const [statistics, setStatistics] = useState([]);
  const [message, setMessage] = useState('');

  const getStatistics = async () => {
    const ans = await getStatisticsByUser();

    setStatistics(ans.data);
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const punchBtn = async (type) => {
    setPass(!pass);

    if (type === "Clock In") {
      // e.target.innerText = "Clock Out";
      clearInterval(tc2);

      if (startTs === "") {
        setStartTs(new Date().getTime());
      }

      tc = setInterval(() => {
        // if (progressTimer === 480) {
        //   setOverTimeTimer(++overTimeTimer);
        // } else {
        setTimer(++timer);
        setProgressTimer(++progressTimer);
        // setPercentageDone((progressTimer / 480) * 100);
        // }
      }, 60 * 1000);

      let status = "ONLINE";
      let date = new Date().toLocaleDateString();

      let activity = {
        type: "PUNCH_IN",
        ts: new Date().getTime(),
        message
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
        // overtime: overTimeTimer,
        hours: timer,
        status,
      });
      console.log(ans);
    } else {
      // e.target.innerText = "Clock In";
      clearInterval(tc);

      tc2 = setInterval(() => {
        setBreakTimer(++breakTimer);
      }, 60 * 1000);

      let status = "OFFLINE";

      let date = new Date().toLocaleDateString();

      let activity = {
        type: "PUNCH_OUT",
        ts: new Date().getTime(),
        message
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
        // overtime: overTimeTimer,
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
          {/* <button onClick={() => {
            punchBtn('Clock In');
          }}>Clock In</button> */}
          
          <div className="clock-nav flex">
            <div className="sat">
              <h3>Sa</h3>
              <p>DAY</p>
            </div>
            <div className="hrs">
              <h3>12</h3>
              <p>HOURS</p>
            </div>
            <h3 className="puts">:</h3>
            <div className="min">
              <h3>59</h3>
              <p>MIN</p>
            </div>
            <h3 className="puts">:</h3>
            <div className="sec">
              <h3>09</h3>
              <p>SEC</p>
            </div>

            <div className="bottomji">
              <i id="fg" onClick={bottomta} className="fa-solid fa-chevron-down char cursor-pointer"></i>
              <i id="sg" onClick={bottomta1} className="fa-solid fa-chevron-up char char1 cursor-pointer"></i>
              <OutsideClickHandler
                onOutsideClick={() => {
                  setPass1(false);
                  document.getElementById("sg").style.display = "none";
                  document.getElementById("fg").style.display = "block";
                }}
              >
                <div style={stylePeer1} className="brake">
                  <div onClick={() => {
                    punchBtn('Clock Out');
                  }} className="flex items-center bt cursor-pointer">
                    <img className="brakes" src={brake} alt="" />
                    <p className="bring">Brake</p>
                  </div>
                  <hr />
                  <div onClick={() => {
                    setPop1(true);
                  }} className="logout flex items-center cursor-pointer">
                    <img className="logouts" src={logout} alt="logout" />
                    <p className="out">Clock Out</p>
                  </div>
                </div>
              </OutsideClickHandler>
            </div>

          </div>
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
      {
        pop1 && <LogoutPop setPop1={setPop1} setMessage={setMessage} punchBtn={punchBtn} />
      }
    </>
  );
};

export default EmployeeNavbar;
