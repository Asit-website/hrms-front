import { useEffect, useState } from 'react';
import AdminSidebar from '../Sidebar/AdminSidebar';
import AdminNavbar from '../Navbar/AdminNavbar';
import { useMain } from '../../../hooks/useMain'
import annPlus from "../../images/annPlus.png"
import "./indicator.css"
import cross from "../../images/crossAn.png"
import { FaRegStar } from "react-icons/fa";


const Appraisal = ({ pop, setPop, setAlert }) => {
  const { user,getAppraisal  ,createAppraisal , allEmployee} = useMain();

  const [openForm , setOpenForm] = useState(false);

   const [data , setData] = useState([]);

   const [employee , setEmployee] = useState([]);

 const [formdata  , setFormdata] = useState({
  Branch:"",
  Employee:"",
  SelectMonth:"",
  Remarks:""
 })

const getData = async () => {
  const ans = await getAppraisal();
  console.log(ans?.data);
  setData(ans?.data);
}

const fetchEmployee = async()=>{
   const ans = await allEmployee();
   setEmployee(ans?.data);
    
}

useEffect(()=>{
 getData();
 fetchEmployee();
},[])


const changeHandler = (e)=>{
  e.preventDefault();
  const {name , value} = e.target;

   setFormdata((prev)=>({
    ...prev ,
    [name]:value
   }))
  
}

const submitHandler = async(e)=>{
  e.preventDefault();
  const ans = await createAppraisal({ ...formdata });
   getData();
  alert("Successfuly Created");
setOpenForm(false);
}


  return (
    <>
      <div className="annDash relative h-full">

        <AdminSidebar pop={pop} setPop={setPop} />

        <div className="tm">
          <AdminNavbar user={user} setAlert={setAlert} />
          <div className="em">

            <div className='anNav'>

                {/* left sie */}
                <div className='anNavLeft'>

                    <h2>Manage Appraisal</h2>
                     <p>Dashboard <span>> Appraisal</span> </p>

                </div>

                {/* rogth side  */}
                <div onClick={()=>setOpenForm(true)} className='plusImg'>
                    <img src={annPlus} alt="" />

                </div>

            </div>
           

              <main className='anMain'>

{/* top */}
<div className='anmainTop'>
    {/* left side */}
    <div className='anMLef'>

        <select name="" id="">
            <option value="10">10</option>
        </select>

        <span>entries per page</span>

    </div>

    {/* right side  */}
    <div className='anMaRi'>
        <input type="text" placeholder='Search...' />
    </div>
</div>

 

<div class="relative overflow-x-auto">

    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">

        <thead class="text-xs text-black uppercase  dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                BRANCH
                </th>
                <th scope="col" class="px-6 py-3">
                DEPARTMENT
                </th>
                <th scope="col" class="px-6 py-3">
                DESIGNATION
                </th>
                <th scope="col" class="px-6 py-3">
                EMPLOYEE
                </th>
                <th scope="col" class="px-6 py-3">
                TARGET RATING
                </th>
                <th scope="col" class="px-6 py-3">
                OVERALL RATING
                </th>
                <th scope="col" class="px-6 py-3">
                APPRAISAL DATE
                </th>
                <th scope="col" class="px-6 py-3">
                ACTION
                </th>
            </tr>
        </thead>

        <tbody>

            {
                data.map((item ,index)=>(
                    <tr key={index} class="bg-white">
         
                    <td class="px-6 py-4">
                        {item.Branch}
                    </td>
                    <td class="px-6 py-4">
                        {item.department}
                    </td>
                    <td class="px-6 py-4">
                    {item.designation}
                    </td>
                    <td class="px-6 py-4">
                    {item.Employee}
                    </td>
                    
                    <td class="px-6 py-4">
                    {item.targetRating}
                    </td>
                    <td class="px-6 py-4">
                    {item.overallRating}
                    </td>
                    <td class="px-6 py-4">
                    {item.SelectMonth}
                    </td>

                    <td class="px-6 py-4">
                  
                    </td>


                </tr>
                ))
            }

           
           
        </tbody>

    </table>

    <p className='showText'>Showing 1 to 1 of 1 entries</p>

</div>


              </main>

          </div>
        </div>

           {/* form  */}
           {
            openForm && 
                <div className='annFormwrap'>

            <form onSubmit={submitHandler} className='openform' >

          <nav>
            {/* left  */}
            <h2>Create New Appraisal</h2>
            <img onClick={()=>setOpenForm(false)} className='cursor-pointer' src={cross} alt="" />
          </nav>

          <hr />

          <div className="allInputFileds">

               <label htmlFor="" className='fullLabel' >
                <p>Branch*</p>
                <select onChange={changeHandler} value={formdata.Branch} name="Branch"> 
                <option value="Select Branch">Select Branch</option>
                <option value="BRANCH1">BRANCH1</option>
                <option value="BRANCH2">BRANCH2</option>
                </select>
               </label>

               <label  className='halfLabel' >
                <p>Employee*</p>
                <select onChange={changeHandler} value={formdata.Employee} name="Employee" > 
                <option value="Select Employee">Select Employee</option>
             {
               employee.map((item ,index)=>(
                <option value={item.fullName} key={index}>{item.fullName}</option>

              ))
             }
                </select>
               </label>

               <label className='halfLabel' >
                <p>Select Month*</p>
              <input  name="SelectMonth"
          value={formdata.SelectMonth} onChange={changeHandler} type="date" />
               </label>

               <label htmlFor="" className='fullLabel' >
                <p>Remarks</p>
               <textarea onChange={changeHandler} value={formdata.Remarks} name="Remarks" placeholder='Enter remark' id="" cols="20" rows="3"></textarea>
               </label>

    
          </div>

          <hr />

          <div className="createBtn">
            <button type='button' onClick={()=>setOpenForm(false)} className='cancelBtn'>Cancel</button>
            <button type='submit' className='creteBtn'>Create</button>
          </div>


            </form>
                </div>
           }

      </div>
    </>
  )
}

export default Appraisal;