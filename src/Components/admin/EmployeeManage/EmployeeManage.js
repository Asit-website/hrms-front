import React, { useState, useEffect } from "react";
import AdminNavbar from "../../admin/Navbar/AdminNavbar";
import AdminSidebar from "../../admin/Sidebar/AdminSidebar";
import "react-calendar/dist/Calendar.css";
import { useMain } from "../../../hooks/useMain";
import ladki from "../../images/ladki.png";
import edit from "../../images/edit.png";
import upper from "../../images/upper.png";
import lower from "../../images/lower.png";
import del from "../../images/delete.png";
import { useNavigate, useParams } from "react-router-dom";
import HrSidebar from "../../Hr/Sidebar/HrSidebar";
import HrNavbar from "../../Hr/Navbar/HrNavbar";

const EmployeeManage = ({ pop1, setPop1, pop, setPop, setAlert, isHr = false }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, createEmployee1, getUsers, updateUser } = useMain();
  const [value1, setValue1] = useState({
    status: false,
    fullName: "",
    password: "",
    department: "",
    email: "",
    reportingManager: "",
    designation: "",
    joiningDate: "",
  });

  const [value2, setValue2] = useState({
    status: false,
    gmail: "",
    email1: "",
    mobile: "",
    gender: "",
    dob: "",
  });

  const [value3, setValue3] = useState({
    status: false,
    pan: "",
    adhar: "",
    father: "",
    currentAddress: "",
    currentState: "",
    currentCity: "",
    currentPin: "",
    residence: "",
    perState: "",
    perCity: "",
    perPin: "",
    Martial: "",
    nationality: "",
    Mother: "",
  });

  const [value4, setValue4] = useState({
    status: false,
    qualification: "",
    specialization: "",
    qualificationType: "",
    yearPass: "",
    university: "",
    college: "",
    percentage: "",
    previousCompany: "",
    previousDesignation: "",
    toDate: "",
    fromDate: "",
    numberOfMonth: "",
    Jobdescription: "",
  });

  const [value5, setValue5] = useState({
    status: false,
    SalaryPay: "",
    SalaryBankName: "",
    BeneficiaryName: "",
    BankIfsc: "",
    AccountNumber: "",
    confirmAccount: "",
    Branch: "",
  });

  useEffect(() => {
    let form1 = localStorage.getItem("form1");
    if (form1) {
      form1 = JSON.parse(form1);
      setValue1(form1);
    }
    let form2 = localStorage.getItem("form2");
    if (form2) {
      form2 = JSON.parse(form2);
      setValue2(form2);
    }
    let form3 = localStorage.getItem("form3");
    if (form3) {
      form3 = JSON.parse(form3);
      setValue3(form3);
    }
    let form4 = localStorage.getItem("form4");
    if (form4) {
      form4 = JSON.parse(form4);
      setValue4(form4);
    }
    let form5 = localStorage.getItem("form5");
    if (form5) {
      form5 = JSON.parse(form5);
      setValue5(form5);
    }
  }, []);

  useEffect(() => {
    if (id) {
      getUser();
    }
  }, [id]);

  const getUser = async () => {
    const ans = await getUsers(id);
    console.log(ans);
    setValue1({
      status: false,
      fullName: ans.data.fullName,
      department: ans.data.department,
      email: ans.data.email,
      reportingManager: ans.data.reportingManager,
      designation: ans.data.designation,
      joiningDate: ans.data.joiningDate,
      password: ''
    });
    setValue2({
      status: false,
      gmail: ans.data.gmail,
      email1: ans.data.email1,
      mobile: ans.data.mobile,
      gender: ans.data.gender,
      dob: ans.data.dob
    });
    setValue3({
      status: false,
      pan: ans.data.pan,
      adhar: ans.data.adhar,
      father: ans.data.father,
      currentAddress: ans.data.currentAddress,
      currentState: ans.data.currentState,
      currentCity: ans.data.currentCity,
      currentPin: ans.data.currentPin,
      residence: ans.data.residence,
      perState: ans.data.perState,
      perCity: ans.data.perCity,
      perPin: ans.data.perPin,
      Martial: ans.data.Martial,
      nationality: ans.data.nationality,
      Mother: ans.data.Mother,
    });
    setValue4({
      status: false,
      qualification: ans.data.qualification,
      specialization: ans.data.specialization,
      qualificationType: ans.data.qualificationType,
      yearPass: ans.data.yearPass,
      university: ans.data.university,
      college: ans.data.college,
      percentage: ans.data.percentage,
      previousCompany: ans.data.previousCompany,
      previousDesignation: ans.data.previousDesignation,
      toDate: ans.data.toDate,
      fromDate: ans.data.fromDate,
      numberOfMonth: ans.data.numberOfMonth,
      Jobdescription: ans.data.Jobdescription
    });
    setValue5({
      status: false,
      SalaryPay: ans.data.SalaryPay,
      SalaryBankName: ans.data.SalaryBankName,
      BeneficiaryName: ans.data.BeneficiaryName,
      BankIfsc: ans.data.BankIfsc,
      AccountNumber: ans.data.AccountNumber,
      confirmAccount: ans.data.confirmAccount,
      Branch: ans.data.Branch
    });
  };

  const handleChange = (e, type) => {
    if (type === "form1") {
      setValue1({ ...value1, [e.target.name]: e.target.value });
    } else if (type === "form2") {
      setValue2({ ...value2, [e.target.name]: e.target.value });
    } else if (type === "form3") {
      setValue3({ ...value3, [e.target.name]: e.target.value });
    } else if (type === "form4") {
      setValue4({ ...value4, [e.target.name]: e.target.value });
    } else if (type === "form5") {
      setValue5({ ...value5, [e.target.name]: e.target.value });
    }
  };

  const handleEdit = (type) => {
    if (type === "form1") {
      setValue1({ ...value1, status: false });
      localStorage.setItem(type, JSON.stringify({ ...value1, status: false }));
    } else if (type === "form2") {
      setValue2({ ...value2, status: false });
      localStorage.setItem(type, JSON.stringify({ ...value2, status: false }));
    } else if (type === "form3") {
      setValue3({ ...value3, status: false });
      localStorage.setItem(type, JSON.stringify({ ...value3, status: false }));
    } else if (type === "form4") {
      setValue4({ ...value4, status: false });
      localStorage.setItem(type, JSON.stringify({ ...value4, status: false }));
    } else if (type === "form5") {
      setValue5({ ...value5, status: false });
      localStorage.setItem(type, JSON.stringify({ ...value5, status: false }));
    }
  };

  const handleSave = (type) => {
    if (type === "form1") {
      setValue1({ ...value1, status: true });
      localStorage.setItem(type, JSON.stringify({ ...value1, status: true }));
    } else if (type === "form2") {
      setValue2({ ...value2, status: true });
      localStorage.setItem(type, JSON.stringify({ ...value2, status: true }));
    } else if (type === "form3") {
      setValue3({ ...value3, status: true });
      localStorage.setItem(type, JSON.stringify({ ...value3, status: true }));
    } else if (type === "form4") {
      setValue4({ ...value4, status: true });
      localStorage.setItem(type, JSON.stringify({ ...value4, status: true }));
    } else if (type === "form5") {
      setValue5({ ...value5, status: true });
      localStorage.setItem(type, JSON.stringify({ ...value5, status: true }));
    }
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();

    if (!id) {
      const ans = await createEmployee1({
        ...value1,
        ...value2,
        ...value3,
        ...value4,
        ...value5,
      });
      console.log(ans.data);
      // console.log({ ...value1, ...value2, ...value3, ...value4, ...value5 });
      localStorage.removeItem({ ...value1, status: false });
      setValue1({
        status: false,
        fullName: "",
        password: "",
        department: "",
        email: "",
        reportingManager: "",
        designation: "",
        joiningDate: "",
      });
      setValue2({
        status: false,
        gmail: "",
        email1: "",
        mobile: "",
        gender: "",
        dob: "",
      });
      setValue3({
        status: false,
        pan: "",
        adhar: "",
        father: "",
        currentAddress: "",
        currentState: "",
        currentCity: "",
        currentPin: "",
        residence: "",
        perState: "",
        perCity: "",
        perPin: "",
        Martial: "",
        nationality: "",
        Mother: "",
      });
      setValue4({
        status: false,
        qualification: "",
        specialization: "",
        qualificationType: "",
        yearPass: "",
        university: "",
        college: "",
        percentage: "",
        previousCompany: "",
        previousDesignation: "",
        toDate: "",
        fromDate: "",
        numberOfMonth: "",
        Jobdescription: "",
      });
      setValue5({
        status: false,
        SalaryPay: "",
        SalaryBankName: "",
        BeneficiaryName: "",
        BankIfsc: "",
        AccountNumber: "",
        confirmAccount: "",
        Branch: "",
      });

      alert("created");
    }
    else {
      const ans = await updateUser(id, value1, value2, value3, value4, value5);
      console.log(ans.data);
      alert('Updated');
    }

  };
  return (
    <>
      <div className="employee-dash h-full">
        {isHr ? <HrSidebar /> : <AdminSidebar pop={pop} setPop={setPop} />}
        <div className="tm">
          {isHr ? <HrNavbar user={user} setAlert={setAlert} pop1={pop1} setPop1={setPop1} /> : <AdminNavbar user={user} setAlert={setAlert} />}
          <div className="em">
            <div className="flex-col">
              <form
                onSubmit={(f) => {
                  handleSubmit(f, "submit");
                }}
              >
                <div className="admin-main admin-main1">
                  <div className="admin-form">
                    <div className="admin-form1">
                      <img className="ladki" src={ladki} alt="ladki" />
                      <p className="kds">KDS#001</p>
                      <div className="form-section">
                        <div>
                          <div className="flex flex-col">
                            <input
                              onChange={(e) => {
                                handleChange(e, "form1");
                              }}
                              name="fullName"
                              value={value1?.fullName}
                              type="text"
                              placeholder="Full Name"
                              disabled={value1.status}
                            />
                            <input
                              onChange={(e) => {
                                handleChange(e, "form1");
                              }}
                              name="password"
                              value={value1?.password}
                              type="text"
                              placeholder="Password"
                              disabled={value1.status}
                            />
                            <select
                              onChange={(e) => {
                                handleChange(e, "form1");
                              }}
                              name="department"
                              value={value1?.department}
                              disabled={value1.status}
                            >
                              <option>
                                Department
                              </option>
                              <option value={`UI/UX Designer`}>
                                UI/UX Designer
                              </option>
                              <option value={`Developer`}>
                                Developer
                              </option>
                              <option value={`Manager`}>
                                Manager
                              </option>
                              {
                                user.role === "ADMIN" && <option value={`Hr`}>Hr</option>
                              }

                            </select>
                            <input
                              onChange={(e) => {
                                handleChange(e, "form1");
                              }}
                              type="email"
                              // name="gmail"
                              name="email"
                              // value={value1?.gmail}
                              value={value1?.email}
                              // placeholder="Company Gmail"
                              placeholder="Company Email Address"
                              disabled={value1.status}
                            />
                            <select
                              onChange={(e) => {
                                handleChange(e, "form1");
                              }}
                              name="reportingManager"
                              value={value1?.reportingManager}
                              disabled={value1.status}
                            >
                              <option>Reporting Manager</option>
                              <option value="Chirag">Chirag</option>
                            </select>
                            <select
                              onChange={(e) => {
                                handleChange(e, "form1");
                              }}
                              name="designation"
                              value={value1?.designation}
                              disabled={value1.status}
                            >
                              <option>Designation</option>
                              <option value="Developer">Developer</option>
                              <option value="Designer">Designer</option>
                              <option value="Hr">Hr</option>
                              <option value="Manager">Manager</option>
                            </select>
                            <input
                              onChange={(e) => {
                                handleChange(e, "form1");
                              }}
                              type="date"
                              name="joiningDate"
                              value={value1?.joiningDate}
                              disabled={value1.status}
                            />
                          </div>
                          <div className="inputs-buttons">
                            <button
                              onClick={() => {
                                handleEdit("form1");
                                alert("Now admin can edit");
                              }}
                              type="button"
                              className="edit"
                            >
                              <img src={edit} alt="" /> <span>Edit</span>{" "}
                            </button>
                            <button
                              onClick={() => {
                                handleSave("form1");
                                alert("Saved the data");
                              }}
                              type="button"
                              className="save"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="admin-form2">
                      <div className="basic-information">
                        <div className="basics">
                          <h3>Basic Information</h3>
                          <img src={upper} alt="" />
                        </div>
                        <hr className="upper" />
                        <div className="form2-class">
                          <div className=" w-full mt-2">
                            <div className="flex w-full">
                              <div class="mb-6 w-full try">
                                <label
                                  for="gmail"
                                  class="block mb-0  font-medium "
                                >
                                  Company Gmail
                                </label>
                                <input
                                  type="email"
                                  id="gmail"
                                  class=" w-full rounded-lg"
                                  // required
                                  // name="email"
                                  name="gmail"
                                  // value={value2?.email}
                                  value={value2?.gmail}
                                  onChange={(e) => {
                                    handleChange(e, "form2");
                                  }}
                                  disabled={value2.status}
                                />
                              </div>
                              <div class="mb-6 w-full try">
                                <label
                                  for="email1"
                                  class="block mb-0  font-medium"
                                >
                                  Personal Email Address
                                </label>
                                <input
                                  type="email"
                                  id="email1"
                                  class="rounded-lg  w-full"
                                  // required
                                  name="email1"
                                  value={value2?.email1}
                                  onChange={(e) => {
                                    handleChange(e, "form2");
                                  }}
                                  disabled={value2.status}
                                />
                              </div>
                              <div class="mb-6 w-full try">
                                <label
                                  for="mobile"
                                  class="block mb-0 font-medium"
                                >
                                  Mobile Number*
                                </label>
                                <input
                                  type="text"
                                  id="mobile"
                                  class="rounded-lg  w-full"
                                  // required
                                  name="mobile"
                                  value={value2?.mobile}
                                  onChange={(e) => {
                                    handleChange(e, "form2");
                                  }}
                                  disabled={value2.status}
                                />
                              </div>
                            </div>
                            <div className="flex w-full">
                              <div class="mb-6 w-full try">
                                <label
                                  for="gender"
                                  class="block mb-0  font-medium "
                                >
                                  Gender
                                </label>
                                <select
                                  onChange={(e) => {
                                    handleChange(e, "form2");
                                  }}
                                  name="gender"
                                  value={value2?.gender}
                                  disabled={value2.status}
                                  className="w-full rouneded-lg"
                                >
                                  <option>gender</option>
                                  <option>Male</option>
                                  <option>Female</option>
                                  onChange=
                                  {(e) => {
                                    handleChange(e, "form2");
                                  }}
                                  disabled={value2.status}
                                </select>
                              </div>
                              <div class="mb-6 w-full try">
                                <label
                                  for="dob"
                                  class="block mb-0  font-medium"
                                >
                                  Date of Birth
                                </label>
                                <input
                                  type="text"
                                  id="dob"
                                  class="rounded-lg  w-full"
                                  // required
                                  name="dob"
                                  value={value2?.dob}
                                  onChange={(e) => {
                                    handleChange(e, "form2");
                                  }}
                                  disabled={value2.status}
                                />
                              </div>
                              <div class="mb-6 w-full try">
                                <div className="inputs-buttons w-full inputs-button1">
                                  <button
                                    onClick={() => {
                                      handleEdit("form2");
                                    }}
                                    type="button"
                                    className="edit"
                                  >
                                    <img src={edit} alt="" /> <span>Edit</span>{" "}
                                  </button>
                                  <button
                                    onClick={() => {
                                      handleSave("form2");
                                    }}
                                    type="button"
                                    className="save"
                                  >
                                    Save
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basic-information mt-7">
                        <div className="basics">
                          <h3>Personal Information</h3>
                          <img src={upper} alt="" />
                        </div>
                        <hr className="upper" />
                        <div className="form2-class">
                          <div className="w-full mt-2">
                            <div className="flex w-full">
                              <div class="mb-6 w-full try">
                                <label
                                  for="pan"
                                  class="block mb-0  font-medium "
                                >
                                  PAN No.
                                </label>
                                <input
                                  type="text"
                                  id="pan"
                                  class=" w-full rounded-lg"
                                  // required
                                  name="pan"
                                  value={value3?.pan}
                                  onChange={(e) => {
                                    handleChange(e, "form3");
                                  }}
                                  disabled={value3.status}
                                />
                              </div>
                              <div class="mb-6 w-full try">
                                <label
                                  for="adhar"
                                  class="block mb-0  font-medium"
                                >
                                  Aadhaar No.
                                </label>
                                <input
                                  type="text"
                                  id="adhar"
                                  class="rounded-lg  w-full"
                                  // required
                                  name="adhar"
                                  value={value3?.adhar}
                                  onChange={(e) => {
                                    handleChange(e, "form3");
                                  }}
                                  disabled={value3.status}
                                />
                              </div>
                              <div class="mb-6 w-full try">
                                <label
                                  for="father"
                                  class="block mb-0 font-medium"
                                >
                                  Father Name
                                </label>
                                <input
                                  type="text"
                                  id="father"
                                  class="rounded-lg  w-full"
                                  // required
                                  name="father"
                                  value={value3?.father}
                                  onChange={(e) => {
                                    handleChange(e, "form3");
                                  }}
                                  disabled={value3.status}
                                />
                              </div>
                            </div>
                            <div className="flex w-full">
                              <div class="mb-6 w-full try">
                                <label
                                  for="currentAddress"
                                  class="block mb-0  font-medium "
                                >
                                  Current Residence Address
                                </label>
                                <input
                                  type="text"
                                  id="currentAddress"
                                  class="rounded-lg  w-full"
                                  // required
                                  name="currentAddress"
                                  value={value3?.currentAddress}
                                  onChange={(e) => {
                                    handleChange(e, "form3");
                                  }}
                                  disabled={value3.status}
                                />
                              </div>
                            </div>
                            <div className="flex w-full">
                              <div class="mb-6 w-full try">
                                <label
                                  for="currentState"
                                  class="block mb-0  font-medium "
                                >
                                  Current state
                                </label>
                                <select
                                  class="rounded-lg  w-full"
                                  name="currentState"
                                  id="currentState"
                                  value={value3?.currentState}
                                  onChange={(e) => {
                                    handleChange(e, "form3");
                                  }}
                                  disabled={value3.status}
                                >
                                  <option>CurrentState</option>
                                  <option>Jharkhand</option>
                                </select>
                              </div>
                              <div class="mb-6 w-full try">
                                <label
                                  for="currentCity"
                                  className="block mb-0  font-medium"
                                >
                                  Current city
                                </label>
                                <input
                                  type="text"
                                  id="currentCity"
                                  className="rounded-lg  w-full"
                                  // required
                                  name="currentCity"
                                  value={value3?.currentCity}
                                  onChange={(e) => {
                                    handleChange(e, "form3");
                                  }}
                                  disabled={value3.status}
                                />
                              </div>
                              <div class="mb-6 w-full try">
                                <label
                                  for="currentPin"
                                  class="block mb-0 font-medium"
                                >
                                  Area Pincode
                                </label>
                                <input
                                  type="text"
                                  id="currentPin"
                                  class="rounded-lg  w-full"
                                  // required
                                  name="currentPin"
                                  value={value3?.currentPin}
                                  onChange={(e) => {
                                    handleChange(e, "form3");
                                  }}
                                  disabled={value3.status}
                                />
                              </div>
                            </div>
                            <div className="flex w-full">
                              <div class="mb-6 w-full try">
                                <div className="flex items-center">
                                  <label
                                    for="residence"
                                    class="block mb-0  font-medium "
                                  >
                                    Permanent Residence Address{" "}
                                  </label>
                                  <div class="flex items-center">
                                    <input
                                      id="link-checkbox"
                                      type="checkbox"
                                      value=""
                                      class="w-4 checkta  rounded mt-3 "
                                    />
                                    <label
                                      for="link-checkbox"
                                      class="ml-2 text-sm font-medium  text-gray-900 dark:text-gray-300"
                                    >
                                      Set as present{" "}
                                      <a
                                        href="#"
                                        class="text-blue-600 dark:text-blue-500 hover:underline"
                                      ></a>
                                      .
                                    </label>
                                  </div>
                                </div>
                                <input
                                  type="text"
                                  id="residence"
                                  name="residence"
                                  value={value3?.residence}
                                  className=" rounded-lg w-full"
                                  onChange={(e) => {
                                    handleChange(e, "form3");
                                  }}
                                  disabled={value3.status}
                                />
                              </div>
                            </div>

                            <div className="flex w-full">
                              <div class="mb-6 w-full try">
                                <label
                                  for="perState"
                                  class="block mb-0  font-medium "
                                >
                                  Permanent state
                                </label>
                                <select
                                  className="rounded-lg  w-full"
                                  name="perState"
                                  value={value3?.perState}
                                  id="perState"
                                  onChange={(e) => {
                                    handleChange(e, "form3");
                                  }}
                                  disabled={value3.status}
                                >
                                  <option>Permanent State</option>
                                  <option>Jharkhand</option>
                                </select>
                              </div>
                              <div class="mb-6 w-full try">
                                <label
                                  for="perCity"
                                  class="block mb-0  font-medium"
                                >
                                  Permanent city
                                </label>
                                <input
                                  type="text"
                                  id="perCity"
                                  class="rounded-lg  w-full"
                                  // required
                                  name="perCity"
                                  value={value3?.perCity}
                                  onChange={(e) => {
                                    handleChange(e, "form3");
                                  }}
                                  disabled={value3.status}
                                />
                              </div>
                              <div class="mb-6 w-full try">
                                <label
                                  for="perPin"
                                  class="block mb-0 font-medium"
                                >
                                  Permanent Area Pincode
                                </label>
                                <input
                                  type="text"
                                  id="perPin"
                                  class="rounded-lg  w-full"
                                  // required
                                  name="perPin"
                                  value={value3?.perPin}
                                  onChange={(e) => {
                                    handleChange(e, "form3");
                                  }}
                                  disabled={value3.status}
                                />
                              </div>
                            </div>

                            <div className="flex w-full">
                              <div class="mb-6 w-full try">
                                <label
                                  for="Martial"
                                  class="block mb-0  font-medium "
                                >
                                  Marital status
                                </label>
                                <select
                                  className="rounded-lg w-full"
                                  name="Martial"
                                  id="Martial"
                                  value={value3?.Martial}
                                  onChange={(e) => {
                                    handleChange(e, "form3");
                                  }}
                                  disabled={value3.status}
                                >
                                  <option>Martial Status</option>
                                  <option>Married</option>
                                </select>
                              </div>
                              <div class="mb-6 w-full try">
                                <label
                                  for="nationality"
                                  class="block mb-0  font-medium"
                                >
                                  Nationality
                                </label>
                                <select
                                  className="rounded-lg  w-full"
                                  name="nationality"
                                  id="nationality"
                                  value={value3?.nationality}
                                  onChange={(e) => {
                                    handleChange(e, "form3");
                                  }}
                                  disabled={value3.status}
                                >
                                  <option>Nationality</option>
                                  <option>india</option>
                                </select>
                              </div>
                              <div class="mb-6 w-full try">
                                <label
                                  for="Mother"
                                  class="block mb-0 font-medium"
                                >
                                  Mother name
                                </label>
                                <input
                                  type="text"
                                  id="Mother"
                                  class="rounded-lg  w-full"
                                  // required
                                  name="Mother"
                                  value={value3?.Mother}
                                  onChange={(e) => {
                                    handleChange(e, "form3");
                                  }}
                                  disabled={value3.status}
                                />
                              </div>
                            </div>

                            <div className="inputs-buttons inputs-button2">
                              <button
                                onClick={() => {
                                  handleEdit("form3");
                                }}
                                type="button"
                                className="edit"
                              >
                                <img src={edit} alt="" /> <span>Edit</span>{" "}
                              </button>
                              <button
                                onClick={() => {
                                  handleSave("form3");
                                }}
                                type="button"
                                className="save"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basic-information mt-7">
                        <div className="basics">
                          <h3>Professional Information</h3>
                          <img src={lower} alt="lower" />
                        </div>
                        <hr className="upper" />
                        <div className="form2-class">
                          <div className="w-full mt-2">
                            <div className="flex w-full">
                              <div class="mb-6 w-full try">
                                <label
                                  for="qualification"
                                  class="block mb-0  font-medium "
                                >
                                  Qualification
                                </label>
                                <input
                                  type="text"
                                  id="qualification"
                                  className="w-full rounded-lg"
                                  // required
                                  name="qualification"
                                  value={value4?.qualification}
                                  onChange={(e) => {
                                    handleChange(e, "form4");
                                  }}
                                  disabled={value4.status}
                                />
                              </div>
                              <div class="mb-6 w-full try">
                                <label
                                  for="specialization"
                                  class="block mb-0  font-medium"
                                >
                                  Specialization
                                </label>
                                <input
                                  type="text"
                                  id="specialization"
                                  className="rounded-lg  w-full"
                                  // required
                                  name="specialization"
                                  value={value4?.specialization}
                                  onChange={(e) => {
                                    handleChange(e, "form4");
                                  }}
                                  disabled={value4.status}
                                />
                              </div>
                              <div class="mb-6 w-full try">
                                <label
                                  for="qualificationType"
                                  class="block mb-0 font-medium"
                                >
                                  Qualification Type
                                </label>
                                <select
                                  className="rounded-lg  w-full"
                                  name="qualificationType"
                                  id="qualificationType"
                                  value={value4?.qualificationType}
                                  onChange={(e) => {
                                    handleChange(e, "form4");
                                  }}
                                  disabled={value4.status}
                                >
                                  <option>Qualification Type</option>
                                  <option>M.sc</option>
                                  <option>B.sc</option>
                                </select>
                              </div>
                            </div>

                            <div className="flex w-full">
                              <div class="mb-6 w-full try">
                                <label
                                  for="yearPass"
                                  class="block mb-0 font-medium"
                                >
                                  Year of passing •
                                </label>
                                <select
                                  className="rounded-lg  w-full"
                                  name="yearPass"
                                  id="yearPass"
                                  value={value4?.yearPass}
                                  onChange={(e) => {
                                    handleChange(e, "form4");
                                  }}
                                  disabled={value4.status}
                                >
                                  <option>year of passing</option>
                                  <option>2020</option>
                                  <option>2021</option>
                                </select>
                              </div>
                              <div class="mb-6 w-full try">
                                <label
                                  for="university"
                                  class="block mb-0  font-medium"
                                >
                                  University/Board •
                                </label>
                                <input
                                  type="text"
                                  id="university"
                                  className="rounded-lg  w-full"
                                  // required
                                  name="university"
                                  value={value4?.university}
                                  onChange={(e) => {
                                    handleChange(e, "form4");
                                  }}
                                  disabled={value4.status}
                                />
                              </div>
                              <div class="mb-6 w-full try">
                                <label
                                  for="college"
                                  className="block mb-0  font-medium"
                                >
                                  College/School •
                                </label>
                                <input
                                  type="text"
                                  id="college"
                                  className="rounded-lg  w-full"
                                  // required
                                  name="college"
                                  value={value4?.college}
                                  onChange={(e) => {
                                    handleChange(e, "form4");
                                  }}
                                  disabled={value4.status}
                                />
                              </div>
                            </div>

                            <div className="flex w-full">
                              <div class="mb-6 w-full try">
                                <label
                                  for="percentage"
                                  class="block mb-0  font-medium"
                                >
                                  Grade/CCPA/Percentage
                                </label>
                                <input
                                  type="text"
                                  id="percentage"
                                  className="rounded-lg  w-full"
                                  // required
                                  name="percentage"
                                  value={value4?.percentage}
                                  onChange={(e) => {
                                    handleChange(e, "form4");
                                  }}
                                  disabled={value4.status}
                                />
                              </div>
                              <div class="mb-6 w-full try">
                                <label
                                  for="previousCompany"
                                  class="block mb-0  font-medium"
                                >
                                  Previous Company •
                                </label>
                                <input
                                  type="text"
                                  id="previousCompany"
                                  className="rounded-lg  w-full"
                                  // required
                                  name="previousCompany"
                                  value={value4?.previousCompany}
                                  onChange={(e) => {
                                    handleChange(e, "form4");
                                  }}
                                  disabled={value4.status}
                                />
                              </div>
                              <div class="mb-6 w-full try">
                                <label
                                  for="previousDesignation"
                                  className="block mb-0  font-medium"
                                >
                                  Previous Designation •
                                </label>
                                <input
                                  type="text"
                                  id="previousDesignation"
                                  className="rounded-lg  w-full"
                                  // required
                                  name="previousDesignation"
                                  value={value4?.previousDesignation}
                                  onChange={(e) => {
                                    handleChange(e, "form4");
                                  }}
                                  disabled={value4.status}
                                />
                              </div>
                            </div>

                            <div className="flex w-full">
                              <div class="mb-6 w-full try">
                                <label
                                  for="toDate"
                                  class="block mb-0  font-medium"
                                >
                                  To date •
                                </label>
                                <input
                                  type="date"
                                  id="toDate"
                                  className="rounded-lg  w-full"
                                  // required
                                  name="toDate"
                                  value={value4?.toDate}
                                  onChange={(e) => {
                                    handleChange(e, "form4");
                                  }}
                                  disabled={value4.status}
                                />
                              </div>
                              <div class="mb-6 w-full try">
                                <label
                                  for="fromDate"
                                  class="block mb-0  font-medium"
                                >
                                  From date*
                                </label>
                                <input
                                  type="date"
                                  id="fromDate"
                                  className="rounded-lg  w-full"
                                  // required
                                  name="fromDate"
                                  value={value4?.fromDate}
                                  onChange={(e) => {
                                    handleChange(e, "form4");
                                  }}
                                  disabled={value4.status}
                                />
                              </div>
                              <div class="mb-6 w-full try">
                                <label
                                  for="numberOfMonth"
                                  className="block mb-0  font-medium"
                                >
                                  Number of months *
                                </label>
                                <input
                                  type="text"
                                  id="numberOfMonth"
                                  className="rounded-lg  w-full"
                                  // required
                                  name="numberOfMonth"
                                  value={value4?.numberOfMonth}
                                  onChange={(e) => {
                                    handleChange(e, "form4");
                                  }}
                                  disabled={value4.status}
                                />
                              </div>
                            </div>

                            <div className="flex w-full">
                              <div class="mb-6 w-full try">
                                <label
                                  for="Jobdescription"
                                  class="block mb-0  font-medium"
                                >
                                  Job description
                                </label>
                                <input
                                  type="text"
                                  id="Jobdescription"
                                  className="rounded-lg  w-full Jobdescription"
                                  // required
                                  name="Jobdescription"
                                  value={value4?.Jobdescription}
                                  onChange={(e) => {
                                    handleChange(e, "form4");
                                  }}
                                  disabled={value4.status}
                                />
                              </div>
                            </div>
                            <div className="inputs-buttons inputs-button2">
                              <button
                                onClick={() => {
                                  handleEdit("form4");
                                }}
                                type="button"
                                className="edit"
                              >
                                <img src={edit} alt="" /> <span>Edit</span>{" "}
                              </button>
                              <button
                                onClick={() => {
                                  handleSave("form4");
                                }}
                                type="button"
                                className="save"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basic-information mt-7">
                        <div className="basics">
                          <h3>Bank Account Information</h3>
                          <img src={lower} alt="lower" />
                        </div>
                        <hr className="upper" />
                        <div className="form2-class">
                          <div className="w-full mt-2">
                            <div className="flex w-full">
                              <div className="mb-6 w-full try">
                                <label
                                  for="SalaryPay"
                                  class="block mb-0  font-medium "
                                >
                                  Salary Pay Mode
                                </label>
                                <input
                                  type="text"
                                  id="SalaryPay"
                                  className="w-full rounded-lg"
                                  // required
                                  name="SalaryPay"
                                  value={value5?.SalaryPay}
                                  onChange={(e) => {
                                    handleChange(e, "form5");
                                  }}
                                  disabled={value5.status}
                                />
                              </div>
                              <div className="mb-6 w-full try">
                                <label
                                  for="SalaryBankName"
                                  class="block mb-0  font-medium"
                                >
                                  Salary Bank Name
                                </label>
                                <input
                                  type="text"
                                  id="SalaryBankName"
                                  className="rounded-lg  w-full"
                                  // required
                                  name="SalaryBankName"
                                  value={value5?.SalaryBankName}
                                  onChange={(e) => {
                                    handleChange(e, "form5");
                                  }}
                                  disabled={value5.status}
                                />
                              </div>
                              <div className="mb-6 w-full try">
                                <label
                                  for="BeneficiaryName"
                                  class="block mb-0 font-medium"
                                >
                                  Beneficiary Name
                                </label>

                                <input
                                  type="text"
                                  id="BeneficiaryName"
                                  className="rounded-lg  w-full"
                                  // required
                                  name="BeneficiaryName"
                                  value={value5?.BeneficiaryName}
                                  onChange={(e) => {
                                    handleChange(e, "form5");
                                  }}
                                  disabled={value5.status}
                                />
                              </div>
                            </div>

                            <div className="flex w-full">
                              <div className="mb-6 w-full try">
                                <label
                                  for="BankIfsc"
                                  className="block mb-0 font-medium"
                                >
                                  Bank IFSC Code
                                </label>
                                <input
                                  type="text"
                                  id="BankIfsc"
                                  className="rounded-lg  w-full"
                                  // required
                                  name="BankIfsc"
                                  value={value5?.BankIfsc}
                                  onChange={(e) => {
                                    handleChange(e, "form5");
                                  }}
                                  disabled={value5.status}
                                />
                              </div>
                              <div class="mb-6 w-full try">
                                <label
                                  for="AccountNumber"
                                  class="block mb-0  font-medium"
                                >
                                  Account Number
                                </label>
                                <input
                                  type="text"
                                  id="AccountNumber"
                                  className="rounded-lg w-full"
                                  // required
                                  name="AccountNumber"
                                  value={value5?.AccountNumber}
                                  onChange={(e) => {
                                    handleChange(e, "form5");
                                  }}
                                  disabled={value5.status}
                                />
                              </div>
                              <div class="mb-6 w-full try">
                                <label
                                  for="confirmAccount"
                                  className="block mb-0  font-medium"
                                >
                                  Confirm Account Number
                                </label>
                                <input
                                  type="text"
                                  id="confirmAccount"
                                  className="rounded-lg  w-full"
                                  // required
                                  name="confirmAccount"
                                  value={value5?.confirmAccount}
                                  onChange={(e) => {
                                    handleChange(e, "form5");
                                  }}
                                  disabled={value5.status}
                                />
                              </div>
                            </div>

                            <div className="flex">
                              <div class="mb-6 w-[30%] try">
                                <label
                                  for="Branch"
                                  className="block mb-0  font-medium"
                                >
                                  Bank Branch
                                </label>
                                <input
                                  type="text"
                                  id="Branch"
                                  className="rounded-lg  w-full"
                                  // required
                                  name="Branch"
                                  value={value5?.Branch}
                                  onChange={(e) => {
                                    handleChange(e, "form5");
                                  }}
                                  disabled={value5.status}
                                />
                              </div>
                              <div className="inputs-buttons inputs-button2">
                                <button
                                  onClick={() => {
                                    handleEdit("form5");
                                  }}
                                  type="button"
                                  className="edit"
                                >
                                  <img src={edit} alt="" /> <span>Edit</span>{" "}
                                </button>
                                <button
                                  onClick={() => {
                                    handleSave("form5");
                                  }}
                                  type="button"
                                  className="save"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basic-information mt-7">
                        <div className="basics">
                          <h3>Documents</h3>
                          <img src={lower} alt="lower" />
                        </div>
                        <hr className="upper" />
                        <div className="form2-class">
                          <div className="w-full mt-6">
                            <div className="flex w-full">
                              <div class="drag-area try">
                                <div class="icon">
                                  <i class="fas fa-cloud-upload-alt"></i>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                  <header>3 Month salary Slips</header>
                                  <span>Select or drop Your Files Here</span>
                                </div>
                                <input
                                  className="filesjila w-full"
                                  type="file"
                                />
                              </div>
                              <div class="drag-area try">
                                <div class="icon">
                                  <i class="fas fa-cloud-upload-alt"></i>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                  <header>Aadhar Card (Both Sides)</header>
                                  <span>Select or drop Your Files Here</span>
                                </div>
                                <input
                                  className="filesjila w-full"
                                  type="file"
                                />
                              </div>
                              <div class="drag-area try">
                                <div className="icon">
                                  <i className="fas fa-cloud-upload-alt"></i>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                  <header>Cancelled Cheque</header>
                                  <span>Select or drop Your Files Here</span>
                                </div>

                                <input
                                  className="filesjila w-full"
                                  type="file"
                                />
                              </div>
                            </div>
                            <div className="flex w-full mt-6">
                              <div class="drag-area try">
                                <div class="icon">
                                  <i class="fas fa-cloud-upload-alt"></i>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                  <header>PAN Card</header>
                                  <span>Select or drop Your Files Here</span>
                                </div>

                                <input
                                  className="filesjila w-full"
                                  type="file"
                                />
                              </div>
                              <div class="drag-area try">
                                <div class="icon">
                                  <i class="fas fa-cloud-upload-alt"></i>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                  <header>Education Certificate</header>
                                  <span>Select or drop Your Files Here</span>
                                </div>

                                <input
                                  className="filesjila w-full"
                                  type="file"
                                />
                              </div>
                              <div class="drag-area try">
                                <div class="icon">
                                  <i class="fas fa-cloud-upload-alt"></i>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                  <header>Previous organization Offer </header>
                                  <span>Select or drop Your Files Here</span>
                                </div>

                                <input
                                  className="filesjila w-full"
                                  type="file"
                                />
                              </div>
                            </div>
                            <div className="flex w-full mt-6">
                              <div class="drag-area drag-area2 try">
                                <div class="icon">
                                  <i class="fas fa-cloud-upload-alt"></i>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                  <header>PAN Card</header>
                                  <span>Select or drop Your Files Here</span>
                                </div>

                                <input
                                  className="filesjila w-full"
                                  type="file"
                                />
                              </div>

                              <div className="inputs-buttons inputs-button2">
                                <button
                                  onClick={() => {
                                    handleEdit("form5");
                                  }}
                                  type="button"
                                  className="edit delete"
                                >
                                  <img src={del} alt="del" /> <span>Clear</span>{" "}
                                </button>
                                <button
                                  onClick={() => {
                                    handleSave("form5");
                                  }}
                                  type="button"
                                  className="save"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-center justify-center mt-5">
                    <button
                      type="submit"
                      class="text-white outline-none bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  font-semibold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeManage;
