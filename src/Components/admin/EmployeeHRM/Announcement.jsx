import React, { useState } from "react";
import AdminSidebar from "../Sidebar/AdminSidebar";
import AdminNavbar from "../Navbar/AdminNavbar";
import { useMain } from "../../../hooks/useMain";
import srchIcon from "../../images/srchIcon.png";
import chevron from "../../images/chevron_right.png";
import plusIcon from "../../images/plusIcon.png";
import blackRight from "../../images/blackRight.png";
import deleted from "../../images/deleted.png";
import edited from "../../images/edited.png";
import srch2 from "../../images/srch2.png";
import "./Announcement.css";

const sidebarItem = [
  {
    title: "Branch",
    tableData: [
      {
        title: "TYPE",
      },
      {
        title: "ACTION",
      },
    ],
  },
  {
    title: "Department",
    tableData: [
      {
        title: "BRANCH",
      },
      {
        title: "DEPARTMENT",
      },
      {
        title: "ACTION",
      },
    ],
  },
  {
    title: "Designation",
    tableData: [
      {
        title: "DEPARTMENT",
      },
      {
        title: "DESIGNATION",
      },
      {
        title: "ACTION",
      },
    ],
  },
  {
    title: "Leave Type",
    tableData: [
      {
        title: "Leave Type",
      },
      {
        title: "Days/Year",
      },
      {
        title: "ACTION",
      },
    ],
  },
];
const Announcement = ({ setAlert, pop, setPop }) => {
  const {
    user,
    getBranchs,
    postBranch,
    updateBranch,
    deleteBranch,
    getDepartments,
    postDepartment,
    updateDepartment,
    deleteDepartment,
    getDesignations,
    postDesignation,
    updateDesignation,
    deleteDesignation,
  } = useMain();

  const [open, setOpen] = useState(0);
  const [popup1, setPopup1] = useState(false);
  const [popup2, setPopup2] = useState(false);
  const [popup3, setPopup3] = useState(false);
  const [popup4, setPopup4] = useState(false);

  const [branches, setBranches] = useState([]);

  const [departments, setDepartments] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [branch, setBranch] = useState("");
  const [popup, setPopup] = useState(false);

  const styleing = {
    display: popup ? "block" : "none",
  };

  const handleCreateBranch = () => {};

  return (
    <>
      <div className="employee-dash h-full">
        <AdminSidebar pop={pop} setPop={setPop} />
        <div className="tm">
          <AdminNavbar user={user} setAlert={setAlert} />
          <div className="em">
            <div className="flex-col">
              <div className=" dinesh_main">
                <div className="plusSection_1">
                  <div className="adminFirt">
                    <h2 className="hrmShed">HRMS</h2>

                    <div className="hrmpath">
                      <p id="hrmpath_title">HRMS</p>
                      <img src={chevron} alt="" id="hrmpath_img" />
                      <span id="hrmpath_title">HRM Announcement</span>
                    </div>
                  </div>

                  <img
                    //   style={styleing}
                    onClick={() => {
                      if (open === 0) {
                        setPopup1(true);
                      } else if (open === 1) {
                        setPopup2(true);
                      } else if (open === 2) {
                        setPopup3(true);
                      } else if (open === 3) {
                        setPopup4(true);
                      }
                    }}
                    className="plusiCON"
                    src={plusIcon}
                    alt=""
                  />
                </div>
              </div>
              <div className="admin-main main_1">
                <div className="hrmssystemsetup-parents_dinesh">
                  <main className="MarkAtMain_dinesh">
                    <div className="marknav_dinesh">
                      <div className="marNavLef">
                        <select name="" id="">
                          <option value="">10</option>
                        </select>

                        <span>entries per page</span>
                      </div>
                      <div className="marNavRight dinesh_right">
                        <img src={srch2} alt="" />
                        <input type="text" placeholder="search..." />
                      </div>
                    </div>
                  </main>
                </div>

                <>
                  <div
                    style={styleing}
                    // id="default-modal"
                    tabIndex={-1}
                    aria-hidden="true"
                    className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                  >
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                      {/* Modal content */}
                      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Terms of Service
                          </h3>
                        </div>
                        {/* Modal body */}
                        <div className="p-4 md:p-5 space-y-4">
                          <label>Name:</label>
                          <input type="text" name="" id="" />
                        </div>
                        {/* Modal footer */}
                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                          <button
                            onClick={() => setPopup(false)}
                            data-modal-hide="default-modal"
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => setPopup(false)}
                            data-modal-hide="default-modal"
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                          >
                            Create
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>

        {popup1 && (
          <div className="allPopupWrap">
            <div className="class_popup1">
              <h2>Create New Announcement</h2>
              <hr />

              <div className="announcement_form">
                <div class="announcement_subform">
                  <div class="announcement_childform">
                    <label for="title">Announcement Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Enter announcement title"
                    />
                  </div>
                  <div class="announcement_childform">
                    <label for="branch">Branch</label>
                    <select id="branch" name="branch">
                      <option value="select">Select Branch</option>
                      {/* <!-- Add more branch options here --> */}
                    </select>
                  </div>
                </div>
                <div class="announcement_subform">
                  <div class="announcement_childform">
                    <label for="department">Department</label>
                    <select id="department" name="department">
                      <option value="select">Select Department</option>
                      <option value="select">Select All Department</option>
                      <option value="select">Admin </option>
                      <option value="select">HR</option>
                      <option value="select">Sales</option>
                      <option value="select">Marketing</option>
                      <option value="select">Web Development</option>
                      <option value="select">Designer</option>
                      <option value="select">Content</option>
                      <option value="select">Management</option>
                      <option value="select">Accounts</option>
                      <option value="select">Communication</option>
                      <option value="select">Mobile App Development</option>
                      <option value="select">seo intrn new</option>
                      <option value="select">seo</option>
                      {/* <!-- Add more department options here --> */}
                    </select>
                  </div>
                  <div class="announcement_childform">
                    <label for="employee">Employee</label>
                    <select id="employee" name="employee">
                      <option value="select">Select Employee</option>
                      {/* <!-- Add more employee options here --> */}
                    </select>
                  </div>
                </div>
                <div class="announcement_subform">
                  <div class="announcement_childform">
                    <label for="start-date">Announcement Start Date</label>
                    <input
                      type="date"
                      id="start-date"
                      name="start-date"
                      class="date-input"
                    />
                  </div>
                  <div class="announcement_childform">
                    <label for="end-date">Announcement End Date</label>
                    <input
                      type="date"
                      id="end-date"
                      name="end-date"
                      class="date-input"
                    />
                  </div>
                </div>
                <div class="announcement_textarea">
                  <label for="description">Announcement Description</label>
                  <div class="textarea_field">
                    <textarea
                      id="description"
                      name="description"
                      placeholder="Enter announcement description"
                      // style="height: 200px"
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* <label htmlFor="">
                <p>Name</p>
                <input
                  type="text"
                  name="branch"
                  onChange={(e) => {
                    setBranch(e.target.value);
                  }}
                  value={branch}
                  placeholder="Enter Branch Name"
                />
              </label>
    
              <label htmlFor="">
                <p>Name</p>
                <input
                  type="text"
                  name="branch"
                  onChange={(e) => {
                    setBranch(e.target.value);
                  }}
                  value={branch}
                  placeholder="Enter Branch Name"
                />
              </label> */}

              <hr />
              <div className="btnWrap">
                <button className="cencel" onClick={() => setPopup1(false)}>
                  <span>Cancel</span>
                </button>
                <button className="create" onClick={handleCreateBranch}>
                  <span>Create</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Announcement;
