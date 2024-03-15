import AdminSidebar from '../Sidebar/AdminSidebar';
import AdminNavbar from '../Navbar/AdminNavbar';
import { useMain } from '../../../hooks/useMain'
import annPlus from "../../images/annPlus.png"
import "./indicator.css"
import { useState } from 'react';
import cross from "../../images/crossAn.png"
import { FaRegStar } from "react-icons/fa";


const Appraisal = ({ pop, setPop, setAlert }) => {
  const { user } = useMain();

  const [openForm , setOpenForm] = useState(false);

const data = [
    {
        branch:"Head office",
        department:"xyz",
        designation:"xyz",
        employee:"xyz",
        targetRating :"5",  
    overallRating:"5",
    appraisalDate:"	Jan 4, 2024",

    },

]


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
                        {item.branch}
                    </td>
                    <td class="px-6 py-4">
                        {item.department}
                    </td>
                    <td class="px-6 py-4">
                    {item.designation}
                    </td>
                    <td class="px-6 py-4">
                    {item.employee}
                    </td>
                    
                    <td class="px-6 py-4">
                    {item.targetRating}
                    </td>
                    <td class="px-6 py-4">
                    {item.overallRating}
                    </td>
                    <td class="px-6 py-4">
                    {item.appraisalDate}
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

            <form className='openform' >

          <nav>
            {/* left  */}
            <h2>Create New Appraisal</h2>
            <img onClick={()=>setOpenForm(false)} className='cursor-pointer' src={cross} alt="" />
          </nav>

          <hr />

          <div className="allInputFileds">

               <label htmlFor="" className='fullLabel' >
                <p>Branch*</p>
                <select name="" id=""> 
                <option value="">Select Branch</option>
                </select>
               </label>

               <label  className='halfLabel' >
                <p>Employee*</p>
                <select name="" id=""> 
                <option value=""></option></select>
               </label>

               <label className='halfLabel' >
                <p>Select Month*</p>
              <input type="date" />
               </label>

               <label htmlFor="" className='fullLabel' >
                <p>Remarks</p>
               <textarea name="" placeholder='Enter remark' id="" cols="20" rows="3"></textarea>
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