import React from 'react'
import AdminNavbar from "../../admin/Navbar/AdminNavbar";
import AdminSidebar from "../../admin/Sidebar/AdminSidebar";
import 'react-calendar/dist/Calendar.css';
import {useMain} from '../../../hooks/useMain';
import ladki from '../../images/ladki.png';
import edit from '../../images/edit.png';
import upper from '../../images/upper.png'
const EmployeeManage = ({pop,setPop,setAlert}) => {
  const { user } = useMain();
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
                <div className="admin-main admin-main1">
                   <div className='admin-form'>
                      <div className="admin-form1">
                            <img className='ladki' src={ladki} alt="ladki" />
                            <p className='kds'>KDS#001</p>
                            <div className="form-section">
                                <form action="">
                                <div className='flex flex-col'>
                                    <input type="text" placeholder='Full Name' />
                                    <select name="" id="">
                                      <option value="">Department</option>
                                    </select>
                                    <input type="email" placeholder='Company Gmail' />
                                    <select name="" id="">
                                      <option value="">Reporting Manager</option>
                                    </select>
                                    <select name="" id="">
                                      <option value="">Designation</option>
                                    </select>
                                    <input type="date" name="" id="" />
                                    </div>
                                    <div className="inputs-buttons">
                                        <button className='edit'><img  src={edit} alt="" /> <span>Edit</span> </button>
                                        <button className='save'>Save</button>
                                    </div>
                                </form>
                            </div>
                      </div>
                      <div className="admin-form2">
                            <div className="basic-information">
                               <div className="basics">
                                   <h3>Basic Information</h3>
                                   <img src={upper} alt="" />
                               </div>
                               <hr className='upper' />
                               <div className="form2-class">
                                   
<form className=' w-full'>
<div className="flex w-full">
  <div class="mb-6 w-full try">
    <label for="email" class="block mb-0  font-medium ">Company Email Address*</label>
    <input type="email" id="email" class=" w-full rounded-lg"  required/>
  </div>
  <div class="mb-6 w-full try">
    <label for="password" class="block mb-0  font-medium">Personal Email Address</label>
    <input type="email" id="password" class="rounded-lg  w-full" required/>
  </div>
  <div class="mb-6 w-full try">
    <label for="password" class="block mb-0 font-medium">Mobile Number*</label>
    <input type="password" id="password" class="rounded-lg  w-full" required/>
  </div>
  </div>
  <div className="flex w-full">
  <div class="mb-6 w-full try">
    <label for="email" class="block mb-0  font-medium ">Company Email Address*</label>
     <select class="rounded-lg  w-full" name="" id="">
        <option value="">Gender</option>
        <option value="">Male</option>
        <option value="">Female</option>
     </select>
  </div>
  <div class="mb-6 w-full try">
    <label for="password" class="block mb-0  font-medium">Date of Birth</label>
    <input type="text" id="password" class="rounded-lg  w-full" required/>
  </div>
  <div class="mb-6 w-full try">
  <div className="inputs-buttons w-full inputs-button1">
                                        <button className='edit'><img  src={edit} alt="" /> <span>Edit</span> </button>
                                        <button className='save'>Save</button>
                                    </div>
  </div>
  </div>
</form>

                               </div>
                            </div>

                            <div className="basic-information mt-7">
                               <div className="basics">
                                   <h3>Personal Information</h3>
                                   <img src={upper} alt="" />
                               </div>
                               <hr className='upper' />
                               <div className="form2-class">
                                   
<form className=' w-full'>
<div className="flex w-full">
  <div class="mb-6 w-full try">
    <label for="email" class="block mb-0  font-medium ">PAN No.</label>
    <input type="string" id="email" class=" w-full rounded-lg"  required/>
  </div>
  <div class="mb-6 w-full try">
    <label for="password" class="block mb-0  font-medium">Aadhaar No.</label>
    <input type="text" id="password" class="rounded-lg  w-full" required/>
  </div>
  <div class="mb-6 w-full try">
    <label for="password" class="block mb-0 font-medium">Father Name</label>
    <input type="text" id="password" class="rounded-lg  w-full" required/>
  </div>
  </div>
  <div className="flex w-full">
  <div class="mb-6 w-full try">
    <label for="email" class="block mb-0  font-medium ">Current Residence Address</label>
    <input type="text" id="password" class="rounded-lg  w-full" required/>
  </div>

  </div>
  <div className="flex w-full">
  <div class="mb-6 w-full try">
    <label for="email" class="block mb-0  font-medium ">Current state</label>
    <select class="rounded-lg  w-full" name="" id="">
        <option value=""></option>
    </select>
  </div>
  <div class="mb-6 w-full try">
    <label for="password" class="block mb-0  font-medium">Current city</label>
    <input type="text" id="password" class="rounded-lg  w-full" required/>
  </div>
  <div class="mb-6 w-full try">
    <label for="password" class="block mb-0 font-medium">Area Pincode</label>
    <input type="text" id="password" class="rounded-lg  w-full" required/>
  </div>
  </div>
  <div className="flex w-full">
  <div class="mb-6 w-full try">
  <div className='flex items-center'>
    <label for="email" class="block mb-0  font-medium ">Permanent Residence Address </label>
    <div class="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" class="w-4 checkta   text-blue-600 bg-gray-100 border-gray-300 rounded mt-3 "/>
    <label for="link-checkbox" class="ml-2 text-sm font-medium  text-gray-900 dark:text-gray-300">Set as present <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline"></a>.</label>
    </div>
</div>
     <input type="text" className=' rounded-lg w-full' />
  </div>
  </div>
</form>

                               </div>
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

export default EmployeeManage