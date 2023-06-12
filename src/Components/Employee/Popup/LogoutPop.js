import React from "react";
import back from '../../images/back.png';
const LogoutPop = ({setPop1}) => {
  return (
    <>
      <div  className="fat-pop fat-pop1 ">
        <div className="fat-container">
          <div onClick={()=> setPop1(false)} className="flex items-center cursor-pointer">
            <img  src={back} alt="" />
            <p>Back</p>
          </div>
          <form onSubmit={(e)=>{
            e.preventDefault();
          }} className="form6" action="">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Describe your today's work here...."
            ></textarea>
            <button  className="block">Logout</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogoutPop;
