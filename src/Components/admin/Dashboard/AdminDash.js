import React,{useState,useEffect} from 'react'
import AdminNavbar from "../../admin/Navbar/AdminNavbar";
import AdminSidebar from "../../admin/Sidebar/AdminSidebar";
import 'react-calendar/dist/Calendar.css';
import {useMain} from '../../../hooks/useMain';
import plus1 from '../../images/plus1.png';
import loj from '../../images/loj.png';
import person from '../../images/person.png';
import person1 from '../../images/person1.png';
import person2 from '../../images/person2.png'
const AdminDash = ({setAlert,pop,setPop}) => {

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
        <AdminSidebar pop={pop} setPop={setPop} />
        <div className="tm">
          <AdminNavbar  user={user} setAlert={setAlert} />
          <div className="em">
            <div className="flex-col">
                <div className="admin-main">
                   <div className='admin1'>
                    <img className='plus1' src={plus1} alt="plus1" />
                    </div>
                    <div className='main-card flex items-center  justify-between'>
                        <div className="main-box">
                            <div className="main-box1">
                                 <div className='loj'>
                                 <img src={person} alt="loj" />
                                 </div>
                            </div>
                            <div className="main-box2">
                               <h3>Employee Registration</h3>
                            </div>
                        </div>
                        <div className="main-box">
                            <div className="main-box1">
                                 <div className='loj'>
                                 <img src={person} alt="loj" />
                                 </div>
                            </div>
                            <div className="main-box2">
                               <h3>Employee Registration</h3>
                            </div>
                        </div>
                        <div className="main-box">
                            <div className="main-box1">
                            <div className='loj'>
                                 <img src={person2} alt="loj" />
                                 </div>
                            </div>
                            <div className="main-box2">
                               <h3>Employee Registration</h3>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDash