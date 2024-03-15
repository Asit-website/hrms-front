import AdminSidebar from '../Sidebar/AdminSidebar';
import AdminNavbar from '../Navbar/AdminNavbar';
import { useMain } from '../../../hooks/useMain'
import annPlus from "../../images/annPlus.png"
import "./indicator.css"
import { useState } from 'react';
import cross from "../../images/crossAn.png"
import { FaRegStar } from "react-icons/fa";


const Indicator = ({ pop, setPop, setAlert }) => {
  const { user } = useMain();

  const [openForm , setOpenForm] = useState(false);

const data = [
    {
        branch:"Head office",
        department:"xyz",
        designation:"xyz",
    overallRating:"5",
    addedBy:"khushel digi solution" ,
    createAt:"	Jan 4, 2024",

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

                    <h2>Manage Indicator</h2>
                     <p>Dashboard <span>> Indicator</span> </p>

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
                OVERALL RATING
                </th>
                <th scope="col" class="px-6 py-3">
                ADDED BY
                </th>
                <th scope="col" class="px-6 py-3">
                CREATED AT
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
                    {item.overallRating}
                    </td>
                    
                    <td class="px-6 py-4">
                    {item.addedBy}
                    </td>
                    <td class="px-6 py-4">
                    {item.createAt}
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
            <h2>Create New Indicator</h2>
            <img onClick={()=>setOpenForm(false)} className='cursor-pointer' src={cross} alt="" />
          </nav>

          <hr />

          <div className="allInputFileds">

               <label htmlFor="" className='fullLabel' >
                <p>Branch</p>
                <select name="" id=""> 
                <option value="">Head Office</option>
                </select>
               </label>

               <label  className='halfLabel' >
                <p>Department</p>
                <select name="" id=""> 
                <option value="">Select Department</option></select>
               </label>

               <label className='halfLabel' >
                <p>Designation</p>
                <select name="" id=""> 
                <option value="">Select Designation</option></select>
               </label>

           <label className='anotheLabel' >
            <h2>Behavioural Competencies</h2>
            <hr />
             <div className='anWrap'>
                {/* left  */}
                <p>Business Process</p>
                <div className='rating'>
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />

                </div>
             </div>
           </label>
            
           <label className='anotheLabel' >
            <h2>Organizational Competencies</h2>
            <hr />
             <div className='anWrap'>
                {/* left  */}
                <p>Project Management</p>
                <div className='rating'>
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />

                </div>
             </div>
             <div className='anWrap'>
                {/* left  */}
                <p>Project Management</p>
                <div className='rating'>
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />

                </div>
             </div>
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

export default Indicator;