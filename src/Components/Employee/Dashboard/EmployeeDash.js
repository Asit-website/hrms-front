import React,{useState,useEffect} from "react";
import EmployeeNavbar from "../Navbar/EmployeeNavbar";
import EmployeeSidebar from "../Sidebar/EmployeeSidebar";
import bret from "../../images/bret.png";
import plus from "../../images/plus.png";
import double from "../../images/double.png";
import line from "../../images/line.png";
import punjabi from "../../images/punjabi.png";
import nancy from "../../images/nancy.png";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {useMain} from '../../../hooks/useMain';
import { computeHeadingLevel } from "@testing-library/react";
const EmployeeDash = ({setAlert}) => {
  const { user , getEmployee } = useMain();
  const [value, onChange] = useState(new Date());
  const [gen,setGen] = useState([]);
  const [flag,setFlag] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () =>{
    const data = await getEmployee();
    console.log(data);
    setGen(data.data);
    console.log(data.email);
  }
  const dating = () =>{
    new Date();
  }
  return (
    <>
      <div className="employee-dash h-full">
      {/* {
        data.map(val=>{
          return <h2 key={val._id}>{val.email}</h2>
        })
      } */}
        <EmployeeSidebar />
        <div className="tm">
          <EmployeeNavbar user={user} setAlert={setAlert} />
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
                    </div>
                  </div>
                   {
                    gen.length>0 ? gen.map((e,index)=>{
                      return (
                        <React.Fragment key={index}>
                        <div  className="new-joiner">
                    <h3>
                      Welcome our new joiner <span>{e.joiningDate}</span>
                    </h3>
                    <div className="hr">
                      <hr className="hr1" />
                    </div>
                    <div className="joiners flex items-center justify-between">
                      <div className="joiners1">
                        <img src={nancy} alt="" />
                        <h2>{e.fullName}</h2>
                        <p>{e.designation}</p>
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
                  </React.Fragment>
                      )
                    }) : "no"
                   }
               
                </div>
                <div className="second-bedge w-full ">
                  <div className="attendence-yes">
                    <h3>Yesterdays Attendances </h3>
                    <div className="atten-section">
                      <div className="day">
                        <p>Sa</p>
                        <h5>DAY</h5>
                      </div>
                      <div className="hours">
                        <p>12</p>
                        <h5>HOURS</h5>
                      </div>
                      <div className="put">
                        <img src={double} alt="double" />
                      </div>
                      <div className="min">
                        <p>59</p>
                        <h5>MIN</h5>
                      </div>
                      <div className="put">
                        <img src={double} alt="double" />
                      </div>
                      <div className="sec">
                        <p>09</p>
                        <h5>SEC</h5>
                      </div>
                      <div className="line">
                        <img src={line} alt="line" />
                      </div>
                      <div className="total-hrs">
                        <p>09 Hours</p>
                      </div>
                    </div>
                  </div>
                  <div className="calend">
                    <div className="calend-head">
                         <h2>Attendances Calendrer</h2>
                         <p>See all</p>
                    </div>
                    <Calendar onChange={onChange} value={value} />
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
