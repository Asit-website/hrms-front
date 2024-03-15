import AdminSidebar from '../Sidebar/AdminSidebar';
import AdminNavbar from '../Navbar/AdminNavbar';
import { useMain } from '../../../hooks/useMain'
import annPlus from "../../images/annPlus.png"
import "./indicator.css"
import { useState } from 'react';
import cross from "../../images/crossAn.png"
import { FaRegStar } from "react-icons/fa";



const GoalTracking = ({ pop, setPop, setAlert }) => {
  const { user } = useMain();

  const [openForm , setOpenForm] = useState(false);

const data = [
    {
        goalType:"Short term goal",
        subject:"afb project",
        branch:"Head office",
        target:"10000000",
    startDate:"	Jan 4, 2024",
    endDate:"Jan 4, 2024",
    rating:"5",
    progress:"96%"

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

                    <h2>Manage Goal Tracking</h2>
                     <p>Dashboard <span>> Goal Tracking</span> </p>

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
                GOAL TYPE
                </th>
                <th scope="col" class="px-6 py-3">
                SUBJECT
                </th>
                <th scope="col" class="px-6 py-3">
                BRANCH
                </th>
                <th scope="col" class="px-6 py-3">
                TARGET ACHIEVEMENT
                </th>
                <th scope="col" class="px-6 py-3">
                START DATE
                </th>
                <th scope="col" class="px-6 py-3">
                END DATE
                </th>
                <th scope="col" class="px-6 py-3">
                RATING
                </th>
                <th scope="col" class="px-6 py-3">
                PROGRESS
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
                        {item.goalType}
                    </td>
                    <td class="px-6 py-4">
                        {item.subject}
                    </td>
                    <td class="px-6 py-4">
                    {item.branch}
                    </td>
                    <td class="px-6 py-4">
                    {item.target}
                    </td>
                    
                    <td class="px-6 py-4">
                    {item.startDate}
                    </td>
                    <td class="px-6 py-4">
                    {item.endDate}
                    </td>
                    <td class="px-6 py-4">
                    {item.rating}
                    </td>
                    <td class="px-6 py-4">
                    {item.progress}
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
            <h2>Create New Goal Tracking</h2>
            <img onClick={()=>setOpenForm(false)} className='cursor-pointer' src={cross} alt="" />
          </nav>

          <hr />

          <div className="allInputFileds">

               <label htmlFor="" className='halfLabel' >
                <p>Branch</p>
                <select name="" id=""> 
                <option value="">Select Branch</option>
                </select>
               </label>

               <label  className='halfLabel' >
                <p>GoalTypes</p>
                <select name="" id=""> 
                <option value="">Select Goal Type</option></select>
               </label>

               <label className='halfLabel' >
                <p>Start Date</p>
              <input type="date" />
               </label>
               <label className='halfLabel' >
                <p>End Date</p>
              <input type="date" />
               </label>

               <label className='fullLabel' >
                <p>Subject</p>
              <input type="text" />
               </label>

               <label className='fullLabel' >
                <p>Target Achievement</p>
              <input type="text" />
               </label>
               <label className='fullLabel' >
                <p>Description</p>
                <textarea name=""  id="" cols="20" rows="8"></textarea>
               </label>

               <label className='fullLabel' >
                <p>Status</p>
                <select name="" id=""> 
                <option value="">Not Started</option>
                </select>
               </label>


               <div className='fullStars' >
     <FaRegStar/>
     <FaRegStar/>
     <FaRegStar/>
     <FaRegStar/>
     <FaRegStar/>
               </div>

    
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

export default GoalTracking;