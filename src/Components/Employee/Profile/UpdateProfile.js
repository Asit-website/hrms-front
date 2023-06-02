import React, { useState, useEffect } from "react";
import EmployeeNavbar from "../Navbar/EmployeeNavbar";
import EmployeeSidebar from "../Sidebar/EmployeeSidebar";
import { useMain } from "../../../hooks/useMain";
import { useNavigate } from "react-router-dom";
const UpdateProfile = ({ setAlert }) => {
  const { user, updateProfile,postActivity, getStatisticsByUser } = useMain();
  const [value, setValue] = useState(user);

  const navigate = useNavigate();
  useEffect(() => {
    setValue(user);
  }, []);
  console.log("update Profile");
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setValue({ ...value, [e.target.name]: e.target.files[0] });
    } else {
      setValue({ ...value, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    const ans = await updateProfile(value);
    console.log(ans);

    if (ans.success) {
      setAlert("success", ans.message);
      setValue(ans.data);
      navigate("/employeeDash")
    } else {
      setAlert("error", ans.message);
    }
  };

  return (
    <>
      <div className="employee-dash h-full">
        {/* {
        data.map(val=>{
          return <h2 key={val._id}>{val.email}</h2>
        })
      } */}
        <EmployeeSidebar />
        <div className="tm">
          <EmployeeNavbar user={user} setAlert={setAlert} postActivity={postActivity} getStatisticsByUser={getStatisticsByUser} />
          <div className="em">
            <div className="flex-col">
              <form className="updateUser" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="fullName" className="block mb-1 ">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    onChange={handleChange}
                    value={value.fullName}
                    id="fullName"
                    className=" block w-full"
                    // required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-1 ">
                    Company Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={value.email}
                    id="email"
                    className=" block w-full"
                    // required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="mobile" className="block mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    onChange={handleChange}
                    value={value.mobile}
                    id="mobile"
                    className=" block w-full"
                    // required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="image" className="block mb-1">
                    Image
                  </label>
                  <input
                    className="block w-full"
                    name="image"
                    onChange={handleChange}
                    id="file_input"
                    type="file"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email1" className="block mb-1">
                    Personal Email
                  </label>
                  <input
                    className="block w-full"
                    name="email1"
                    value={value.email1}
                    onChange={handleChange}
                    id="email1"
                    type="email"
                    // required
                  />
                </div>
                {/* <div className="mb-6">
                  <label htmlFor="password" className="block mb-1">
                    Password
                  </label>
                  <input
                    className="block w-full"
                    name="password"
                    value={value.password}
                    onChange={handleChange}
                    id="password"
                    type="password"
                    required
                  />
                </div> */}
                <div className="mb-6">
                  <label htmlFor="gmail" className="block mb-1">
                    Company Gmail
                  </label>
                  <input
                    className="block w-full"
                    name="gmail"
                    value={value.gmail}
                    onChange={handleChange}
                    id="gmail"
                    type="email"
                    // required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="department" className="block mb-1">
                    Department
                  </label>
                  <select
                    className="block w-full"
                    onChange={handleChange}
                    name="department"
                    value={value.department}
                    id="department"
                  >
                    <option>Department</option>
                    <option>IT</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="designation" className="block mb-1">
                    Department
                  </label>
                  <select
                    className=" block w-full"
                    onChange={handleChange}
                    name="designation"
                    value={value.designation}
                    id="designation"
                  >
                    <option>Designation</option>
                    <option>Developer</option>
                    <option>Designer</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="date" className="block mb-1">
                    JoiningDate
                  </label>
                  <input
                    onChange={handleChange}
                    type="date"
                    name="joiningDate"
                    value={value.joiningDate}
                    className="block w-full"
                    id="date"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="date" className="block mb-1">
                    PAN No.
                  </label>
                  <input
                    type="text"
                    id="pan"
                    className=" w-full block"
                    // required
                    name="pan"
                    value={value.pan}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="adhar" className="block mb-1">
                    Aadhaar No.
                  </label>
                  <input
                    type="text"
                    id="adhar"
                    className=" block w-full"
                    // required
                    name="adhar"
                    value={value.adhar}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="father" className="block mb-1">
                    Father Name
                  </label>
                  <input
                    type="text"
                    id="father"
                    class=" block  w-full"
                    // required
                    name="father"
                    value={value.father}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="currentAddress" className="block mb-1">
                    Current Residence Address
                  </label>
                  <input
                    type="text"
                    id="currentAddress"
                    className="block  w-full"
                    // required
                    name="currentAddress"
                    value={value.currentAddress}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="currentState" className="block mb-1">
                    Current state
                  </label>
                  <select
                    class="rounded-lg  w-full"
                    name="currentState"
                    id="currentState"
                    value={value.currentState}
                    onChange={handleChange}
                  >
                    <option>CurrentState</option>
                    <option>Jharkhand</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="currentCity" className="block mb-1">
                    Current city
                  </label>
                  <input
                    type="text"
                    id="currentCity"
                    className="rounded-lg  w-full"
                    // required
                    name="currentCity"
                    value={value.currentCity}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="currentPin" className="block mb-1">
                    Area Pincode
                  </label>
                  <input
                    type="text"
                    id="currentPin"
                    className="block  w-full"
                    // required
                    name="currentPin"
                    value={value.currentPin}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="perState" className="block mb-1">
                    Permanent state
                  </label>
                  <select
                    className=" block  w-full"
                    name="perState"
                    value={value.perState}
                    id="perState"
                    onChange={handleChange}
                  >
                    <option>Permanent State</option>
                    <option>Jharkhand</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="perCity" className="block mb-1">
                    Permanent city
                  </label>
                  <input
                    type="text"
                    id="perCity"
                    class="block w-full"
                    // required
                    name="perCity"
                    value={value.perCity}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="perPin" className="block mb-1">
                    Permanent Area Pincode
                  </label>
                  <input
                    type="text"
                    id="perPin"
                    className="block w-full"
                    // required
                    name="perPin"
                    value={value.perPin}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="Martial" className="block mb-1">
                    Marital status
                  </label>
                  <select
                    className="rounded-lg w-full"
                    name="Martial"
                    id="Martial"
                    value={value.Martial}
                    onChange={handleChange}
                  >
                    <option>Martial Status</option>
                    <option>Married</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="nationality" className="block mb-1">
                    Nationality
                  </label>
                  <select
                    className="block  w-full"
                    name="nationality"
                    id="nationality"
                    value={value.nationality}
                    onChange={handleChange}
                  >
                    <option>Nationality</option>
                    <option>india</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="Mother" className="block mb-1">
                    Mother name
                  </label>
                  <input
                    type="text"
                    id="Mother"
                    class=" block w-full"
                    // required
                    name="Mother"
                    value={value.Mother}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
