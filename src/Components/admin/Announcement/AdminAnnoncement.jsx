import AdminSidebar from '../Sidebar/AdminSidebar';
import AdminNavbar from '../Navbar/AdminNavbar';
import { useMain } from '../../../hooks/useMain'
import annPlus from "../../images/annPlus.png"
import "./annocement.css"
import { useState } from 'react';
import cross from "../../images/crossAn.png"

const AdminProfile = ({ pop, setPop, setAlert }) => {
  const { user } = useMain();

  const [openForm , setOpenForm] = useState(false);

const data = [
    {
        title:"abc",
        startDate:"Feb 14,2024",
        endDate:"Feb 14,2024",
    description:"zzzzzzz"
    },
    {
        title:"abc",
        startDate:"Feb 14,2024",
        endDate:"Feb 14,2024",
    description:"zzzzzzz"
    },
    {
        title:"abc",
        startDate:"Feb 14,2024",
        endDate:"Feb 14,2024",
    description:"zzzzzzz"
    },
    {
        title:"abc",
        startDate:"Feb 14,2024",
        endDate:"Feb 14,2024",
    description:"zzzzzzz"
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

                    <h2>Manage Announcement</h2>
                     <p>Dashboard <span>> Announcement</span> </p>

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
                TITLE
                </th>
                <th scope="col" class="px-6 py-3">
                START DATE
                </th>
                <th scope="col" class="px-6 py-3">
                    END DATE
                </th>
                <th scope="col" class="px-6 py-3">
                    DESCRIPTION
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
                        {item.title}
                    </td>
                    <td class="px-6 py-4">
                        {item.startDate}
                    </td>
                    <td class="px-6 py-4">
                    {item.endDate}
                    </td>
                    <td class="px-6 py-4">
                    {item.description}
                    </td>
                    <td class="px-6 py-4">
                  
                    </td>


                </tr>
                ))
            }

           
           
        </tbody>

    </table>

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
            <h2>Create New Announcement</h2>
            <img onClick={()=>setOpenForm(false)} className='cursor-pointer' src={cross} alt="" />
          </nav>

          <hr />

          <div className="allInputFileds">

               <label htmlFor="" >
                <p>Announcement Title</p>
                <input type="text" placeholder='Enter Annoucement Title' />
               </label>

               <label htmlFor="" >
                <p>Branch</p>
                <select name="" id=""> 
                <option value="">Select Branch</option></select>
               </label>

               <label htmlFor="" >
                <p>Department</p>
                <select name="" id=""> 
                <option value="">Select Department</option></select>
               </label>

               <label htmlFor="" >
                <p>Employee</p>
                <select name="" id=""> 
                <option value="">Select Employee</option></select>
               </label>

               <label htmlFor="" >
                <p>Announcement start Date</p>
               <input type="date" />
               </label>

               <label htmlFor="" >
                <p>Announcement End Date</p>
               <input type="date" />
               </label>

           <div className='anDesWrap'>
         <p>Announcement Description</p>
               <textarea name="" id="" cols="30" rows="10" placeholder='Enter Annoucement Title'></textarea>
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

export default AdminProfile