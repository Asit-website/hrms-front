import React from "react";
import back from "../../images/back.png";
const LogoutPop = ({ setPop1, setMessage, punchBtn, setIsLoggedOut }) => {
  return (
    <>
      <div className="fat-pop fat-pop1 ">
        <div className="fat-container">
          <div
            onClick={() => setPop1(false)}
            className="flex items-center cursor-pointer"
          >
            <img src={back} alt="" />
            <p>Back</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              punchBtn("Clock Out");
              setIsLoggedOut(true);
            }}
            className="form6"
          >
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Describe your today's work here...."
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              required
            ></textarea>
            <button type="submit" className="block">Logout</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogoutPop;
