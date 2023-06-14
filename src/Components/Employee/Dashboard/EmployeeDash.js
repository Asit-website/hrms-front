import React, { useState, useEffect } from "react";
import EmployeeNavbar from "../Navbar/EmployeeNavbar";
import EmployeeSidebar from "../Sidebar/EmployeeSidebar";
import bret from "../../images/bret.png";
import plus from "../../images/plus.png";
import punjabi from "../../images/punjabi.png";
import nancy from "../../images/nancy.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useMain } from "../../../hooks/useMain";
import goals from "../../images/goals.png";
import arrow from "../../images/arrow.png";
import { NavLink } from "react-router-dom";
import akash from '../../images/akash.png';
var tc;
var tc2;

const EmployeeDash = ({ setAlert, pop1, setPop1 }) => {
  // =================punch in punch out concept==========
  const { user, postActivity, getStatisticsByUser } = useMain();

  const [startTs, setStartTs] = useState("");
  var [percentageDone, setPercentageDone] = useState(0);

  var [timer, setTimer] = useState(0);

  var [progressTimer, setProgressTimer] = useState(0);

  var [breakTimer, setBreakTimer] = useState(0);

  var [overTimeTimer, setOverTimeTimer] = useState(0);

  const [punchLog, setPunchLog] = useState({});
  const [punchFlag, setPunchFlag] = useState(false);
  const [statistics, setStatistics] = useState([]);

  // ==============other===========================
  const [value, onChange] = useState(new Date());
  const [gen, setGen] = useState([]);
  const [flag, setFlag] = useState();

  const getStatistics = async () => {
    const ans = await getStatisticsByUser();
    // console.log(ans);
    setStatistics(ans.data);
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const punchBtn = async (e) => {
    if (e.target.innerText === "Punch In") {
      e.target.innerText = "Punch Out";
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
      // }, 5 * 1000);

      let status = "ONLINE";
      let date = `${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/${new Date().getFullYear()}`;
      // console.log(date);
      let activity = {
        type: "PUNCH_IN",
        ts: new Date().getTime(),
      };

      let tempActivity = localStorage.getItem("tempActivity");
      if (tempActivity) {
        tempActivity = JSON.parse(tempActivity);
        if (!tempActivity[new Date().getDate()]) {
          // new day
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
      e.target.innerText = "Punch In";
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

  // ==========to get user data================
  useEffect(() => {
    // getData();
  }, []);

  const getData = async () => {};

  return (
    <>
      <div className="employee-dash h-full">
        <EmployeeSidebar />
        <div className="tm">
          <EmployeeNavbar
            user={user}
            setAlert={setAlert}
            postActivity={postActivity}
            getStatisticsByUser={getStatisticsByUser}
            pop1={pop1}
            setPop1={setPop1}
          />
          <div className="em">
            <div className="flex-col">
              <div className="bedge">
                <div className="first-bedge w-full ">
                  <div className="bret">
                    <div className="give flex items-center">
                      <img className="btr" src={bret} alt="" />
                      <p className="ml-3">Give a Badge</p>
                    </div>
                    <div className="give1">
                      <img className="plus" src={plus} alt="" />
                    </div>
                  </div>

                  <div className="celeberation w-full">
                    <div className="cel-head">
                      <h3>Today's celebrations</h3>
                      <p>See all</p>
                    </div>
                    <div className="cel-card">
                      <div className="cel-box">
                        <div className="cel-boxing">
                          <div className="cel-boxing1">
                            <img src={punjabi} alt="" />
                          </div>
                          <div className="cel-boxing2 ml-3">
                            <h2>Steve wills</h2>
                            <p>Assistant manager</p>
                            <button>Wish Birthday</button>
                          </div>
                        </div>
                      </div>
                      <div className="cel-box ml-5">
                        <div className="cel-boxing">
                          <div className="cel-boxing1">
                            <img src={punjabi} alt="" />
                          </div>
                          <div className="cel-boxing2 ml-3">
                            <h2>Steve wills</h2>
                            <p>Assistant manager</p>
                            <button>Wish Birthday</button>
                          </div>
                        </div>
                      </div>
                      <div className="cel-box ml-5">
                        <div className="cel-boxing">
                          <div className="cel-boxing1">
                            <img src={punjabi} alt="" />
                          </div>
                          <div className="cel-boxing2 ml-3">
                            <h2>Steve wills</h2>
                            <p>Assistant manager</p>
                            <button>Wish Birthday</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="new-joiner">
                    <h3>
                      Welcome Onboard
                      <span className="ml-2">(May 12, 2023)</span>
                    </h3>
                    <div className="hr">
                      <hr className="hr1" />
                    </div>
                    <div className="joiners flex items-center justify-between">
                      <div className="joiners1">
                        <img src={nancy} alt="" />
                        <h2>Nancy wills</h2>
                        <p>Assistant manager</p>
                        <div className="cheers mt-5">
                          <div className="cheers1 flex">
                            <i class="fa-solid fa-champagne-glasses"></i>
                            <p className="ml-1">Cheer22</p>
                          </div>
                          <div className="cheer2 flex">
                            <i class="fa-solid fa-comment"></i>
                            <p className="ml-1">Comment</p>
                          </div>
                        </div>
                      </div>
                      <div className="joiners2">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="second-bedge w-full ">
                  <div className="calend falend">
                    <div className="calend-head">
                      <h2>Meetings & more</h2>
                      <img src={goals} alt="goals" />
                    </div>
                    <hr />
                    <div className="cals-dent relative">
                      <NavLink to="/employeeDash/atten">
                        <img width={12} src={arrow} alt="arrow" />
                      </NavLink>
                      <Calendar onChange={onChange} value={value} />
                    </div>
                    <div className="distinguish-fard">
                      <div className="distinguish-box">
                        <img src={akash} alt="akash" />
                        <div className='akash'>
                          <h3>Interview with Akash Negi</h3>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                          <h4>12:30  June 12,2022</h4>
                        </div>
                      </div>
                      <div className="distinguish-box">
                        <img src={akash} alt="akash" />
                        <div className='akash'>
                          <h3>Interview with Akash Negi</h3>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                          <h4>12:30  June 12,2022</h4>
                        </div>
                      </div>
                     
                    </div>

                    <div className="show-all">
                       <p className="text-center">Show all meetings and Interviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDash;
