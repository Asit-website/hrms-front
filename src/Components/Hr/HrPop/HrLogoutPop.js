import React from 'react'
import back from '../../images/back.png';
const HrLogoutPop = ({setPop1, setMessage, punchBtn, setIsLoggedOut}) => {
  return (
    <>
        <div className="fat-pop fat-pop1 ">
        <div className="fat-container">
          <div onClick={() => setPop1(false)} className="flex items-center cursor-pointer">
            <img src={back} alt="" />
            <p>Back</p>
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
          }} className="form6" action="">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Describe your today's work here...."
              onChange={(e)=>{
                setMessage(e.target.value);
              }}
            ></textarea>
            <button onClick={()=>{
              punchBtn('Clock Out');
              setIsLoggedOut(true);
            }} className="block">Logout</button>
          </form>
        </div>
      </div> 
    </>
  )
}

export default HrLogoutPop