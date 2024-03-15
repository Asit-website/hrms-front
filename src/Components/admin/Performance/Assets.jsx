import AdminSidebar from '../Sidebar/AdminSidebar';
import AdminNavbar from '../Navbar/AdminNavbar';
import { useMain } from '../../../hooks/useMain'
import annPlus from "../../images/annPlus.png"
import "./indicator.css"
import { useState } from 'react';
import cross from "../../images/crossAn.png"
import { FaRegStar } from "react-icons/fa";



const Assets = ({ pop, setPop, setAlert }) => {
  const { user } = useMain();

  const [openForm , setOpenForm] = useState(false);

const data = [
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

                    <h2>Assets</h2>
                     <p>Dashboard <span>> Assets</span> </p>

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
                NAME
                </th>
                <th scope="col" class="px-6 py-3">
                USERS
                </th>
                <th scope="col" class="px-6 py-3">
                PURCHASE DATE
                </th>
                <th scope="col" class="px-6 py-3">
                SUPPORTED DATE
                </th>
                <th scope="col" class="px-6 py-3">
                AMOUNT
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
                data.length > 0 ? 
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
                :
                <div className='noEntries'>

                <span >No entries found</span>
                    </div>
                  
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
            <h2>Create New Assets</h2>
            <img onClick={()=>setOpenForm(false)} className='cursor-pointer' src={cross} alt="" />
          </nav>

          <hr />

          <div className="allInputFileds">

          <label className='fullLabel' >
                <p>Employee</p>
              <input type="text" />
               </label>

               <label htmlFor="" className='halfLabel' >
                <p>Name</p>
                <input type="text" />
               </label>

               <label  className='halfLabel' >
                <p>Amount</p>
                <input type="text" />
               </label>

               <label className='halfLabel' >
                <p>Purchase Date</p>
              <input type="date" />
               </label>
               <label className='halfLabel' >
                <p>Supported Date</p>
              <input type="date" />
               </label>
             
               <label className='fullLabel' >
                <p>Description</p>
                <textarea name=""  id="" cols="20" rows="3"></textarea>
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

export default Assets;