import React from 'react'
import MainContext from './MainContext';
import { deleteReq, get, post, put } from '../Api/api'
import { useState } from 'react';

const baseUrl = "http://localhost:5000";

// const baseUrl = "https://172.105.48.246:5000";

// const baseUrl = "https://hrms-backend-q2ta.onrender.com";

// const baseUrl = "https://hmsbackend.kusheldigi.com";

const MainState = (props) => {
   const [user, setUser] = useState({});
   const [flag, setFlag] = useState(false);
   const [chatUser, setChatUser] = useState({});

   const login = async ({ email, employeeCode, password }) => {
      const data = post(`${baseUrl}/auth/login`, { email, employeeCode, password , role:"Admin" }, false);

      console.log("data",data);
      return data;
   };

   const employeeLogin = async ({ email, password }) => {
      const data = post(`${baseUrl}/user/login`, { email, password }, false);
      return data;
   };

   // todo
   const employeeResetPassword = async ({ email, password }) => {
      const data = post(`${baseUrl}/user/resetPassword`, {}, false);
      return data;
   };

   const hrLogin = async ({ email, password }) => {
      const data = post(`${baseUrl}/hr/login`, { email, password }, false);
      return data;
   };

   const createHr = async ({ fullName, password, department, gmail, reportingManager, designation, joiningDate, email, email1, mobile, gender, dob, pan, adhar, father, currentAddress, currentState, currentCity, currentPin, residence, perState, perCity, perPin, Martial, nationality, Mother, qualification, specialization, qualificationType, yearPass, university, college, percentage, previousCompany, previousDesignation, toDate, fromDate, numberOfMonth, Jobdescription, SalaryPay, SalaryBankName, BeneficiaryName, BankIfsc, AccountNumber, confirmAccount, Branch, employeeCode, }) => {
      const data = post(`${baseUrl}/admin/createHr`, {
         fullName,
         password,
         department,
         gmail,
         reportingManager,
         designation,
         joiningDate,
         email,
         email1,
         mobile,
         gender,
         dob,
         pan,
         adhar,
         father,
         currentAddress,
         currentState,
         currentCity,
         currentPin,
         residence,
         perState,
         perCity,
         perPin,
         Martial,
         nationality,
         Mother,
         employeeCode,
         qualification,
         specialization,
         qualificationType,
         yearPass,
         university,
         college,
         percentage,
         previousCompany,
         previousDesignation,
         toDate,
         fromDate,
         numberOfMonth,
         Jobdescription,
         SalaryPay,
         SalaryBankName,
         BeneficiaryName,
         BankIfsc,
         AccountNumber,
         confirmAccount,
         Branch
      }, true);
      return data;
   };

   const getHrs = async () => {
      const data = post(`${baseUrl}/hr/getHrs`, true);
      return data;
   };

   const deleteHr = async () => {
      const data = deleteReq(`${baseUrl}/hr/deleteHr`, true);
      return data;
   };

   const createEmployee = async ({ fullName, password, department, employeeId, gmail, reportingManager, designation, joiningDate, email, email1, mobile, gender, dob, pan, adhar, father, currentAddress, currentState, currentCity, currentPin, residence, perState, perCity, perPin, Martial, nationality, Mother, employeeCode, qualification, specialization, qualificationType, yearPass, university, college, percentage, previousCompany, previousDesignation, toDate, fromDate, numberOfMonth, Jobdescription, SalaryPay, SalaryBankName, BeneficiaryName, BankIfsc, AccountNumber, confirmAccount, Branch }) => {
      const data = post(`${baseUrl}/hr/createUser`, {
         fullName,
         password,
         department,
         employeeId,
         gmail,
         reportingManager,
         designation,
         joiningDate,
         email,
         email1,
         mobile,
         gender,
         dob,
         pan,
         adhar,
         father,
         currentAddress,
         currentState,
         currentCity,
         currentPin,
         residence,
         perState,
         perCity,
         perPin,
         Martial,
         nationality,
         Mother,
         employeeCode,
         qualification,
         specialization,
         qualificationType,
         yearPass,
         university,
         college,
         percentage,
         previousCompany,
         previousDesignation,
         toDate,
         fromDate,
         numberOfMonth,
         Jobdescription,
         SalaryPay,
         SalaryBankName,
         BeneficiaryName,
         BankIfsc,
         AccountNumber,
         confirmAccount,
         Branch
      }, true);
      return data;
   };

   const createEmployee1 = async ({ fullName, password, department, employeeId, gmail, reportingManager, designation, joiningDate, email, email1, mobile, gender, dob, pan, adhar, father, currentAddress, currentState, currentCity, currentPin, residence, perState, perCity, perPin, Martial, nationality, Mother, employeeCode, qualification, specialization, qualificationType, yearPass, university, college, percentage, previousCompany, previousDesignation, toDate, fromDate, numberOfMonth, Jobdescription, SalaryPay, SalaryBankName, BeneficiaryName, BankIfsc, AccountNumber, confirmAccount, Branch }) => {
      const data = post(`${baseUrl}/admin/createUser1`, { fullName, password, department, employeeId, gmail, reportingManager, designation, joiningDate, email, email1, mobile, gender, dob, pan, adhar, father, currentAddress, currentState, currentCity, currentPin, residence, perState, perCity, perPin, Martial, nationality, Mother, employeeCode, qualification, specialization, qualificationType, yearPass, university, college, percentage, previousCompany, previousDesignation, toDate, fromDate, numberOfMonth, Jobdescription, SalaryPay, SalaryBankName, BeneficiaryName, BankIfsc, AccountNumber, confirmAccount, Branch }, true);
      return data;
   };

   const getUsers = async (userId) => {
      const data = get(`${baseUrl}/user/getUsers?userId=${userId}`, true);
      return data;
   };

   const getEmployees = async (userId) => {
      const data = get(`${baseUrl}/hr/getUsers?userId=${userId}`, true);
      return data;
   };

   const getAdminEmployees = async (userId) => {
      const data = get(`${baseUrl}/admin/getAdminEmployees?userId=${userId}`, true);
      return data;
   };

   const getEmployeesByEmployee = async () => {
      const data = get(`${baseUrl}/user/getEmployeesByEmployee`, true);
      return data;
   };

   const postActivity = async ({ date, activity, breaks, hours, status }) => {
      const data = post(`${baseUrl}/activity/postActivity`, { date, activity, breaks, hours, status }, true);
      return data;
   };

   const postActivityHr = async ({ date, activity, breaks, overtime, hours }) => {
      const data = post(`${baseUrl}/activity/postActivityHr`, { date, activity, breaks, overtime, hours }, true);
      return data;
   };

   const getActivitiesByUser = async (date, month, year, page, perPage, userId) => {
      if (date && date.includes('undefined')) {
         date = '';
      }

      const data = get(`${baseUrl}/activity/getActivitiesByUser?date=${date}&month=${month}&year=${year}&perPage=${perPage}&page=${page}&userId=${userId}`, true);
      return data;
   };

   const getStatisticsByUser = async (userId) => {
      const data = get(`${baseUrl}/activity/getStatisticsByUser?userId=${userId}`, true);
      return data;
   };

   const postLeave = async ({ type, from, to, days, reason }) => {
      const data = post(`${baseUrl}/leave/postLeave`, { type, from, to, days, reason }, true);
      return data;
   };

   const updateLeave = async ({ id, status }) => {
      const data = put(`${baseUrl}/leave/updateLeave/${id}`, { status }, true);
      return data;
   };

   const getUserLeaves = async () => {
      const data = get(`${baseUrl}/leave/getUserLeaves`, true);
      return data;
   };

   const getUserLeaveById = async (id) => {
      const data = get(`${baseUrl}/leave/getUserLeaveById/${id}`, true);
      return data;
   };

   const deleteLeave = async (id) => {
      const data = get(`${baseUrl}/leave/deleteLeave/${id}`, true);
      return data;
   };

   const getTotalLeaves = async () => {
      const data = get(`${baseUrl}/totalLeave/getTotalLeaves`, true);
      return data;
   };

   const postTotalLeaves = async ({ totalLeaves }) => {
      const data = post(`${baseUrl}/totalLeave/postTotalLeaves`, { totalLeaves }, true);
      return data;
   };

   const getProjects = async (projectName, employeeName, page, perPage, id) => {
      const data = get(`${baseUrl}/project/getProjects?projectName=${projectName}&employeeName=${employeeName}&page=${page}&perPage=${perPage}&projectId=${id}`, true);
      return data;
   };

   const getProjectsByEmployee = async (page, perPage, query) => {
      const data = get(`${baseUrl}/project/getProjectsByEmployee?page=${page}&perPage=${perPage}&query=${query}`, true);
      return data;
   };

   const postProject = async ({ projectName, client, startDate, endDate, price, priority, projectLeader, teamMembers, description }) => {
      const data = post(`${baseUrl}/project/postProject`, { projectName, client, startDate, endDate, price, priority, projectLeader, teamMembers, description }, true);
      return data;
   };

   const updateProject = async ({ _id, projectName, client, startDate, endDate, price, priority, projectLeader, teamMembers, status, description }) => {
      const data = put(`${baseUrl}/project/updateProject/${_id}`, { projectName, client, startDate, endDate, price, priority, projectLeader, teamMembers, status, description }, true);
      return data;
   };

   const deleteProject = async ({ id }) => {
      const data = deleteReq(`${baseUrl}/project/deleteProject/${id}`, true);
      return data;
   };

   const getHolidays = async () => {
      const data = get(`${baseUrl}/holiday/getHolidays`, true);
      return data;
   };

   const postHoliday = async ({ holidayName, holidayDate }) => {
      const data = post(`${baseUrl}/holiday/postHoliday`, { holidayName, holidayDate }, true);
      return data;
   };

   const updateHoliday = async ({ _id, holidayName, holidayDate }) => {
      console.log(_id, holidayName, holidayDate);
      const data = put(`${baseUrl}/holiday/updateHoliday/${_id}`, { holidayName, holidayDate }, true);
      return data;
   };

   const deleteHoliday = async ({ id }) => {
      const data = post(`${baseUrl}/holiday/deleteHoliday/${id}`, true);
      return data;
   };

   const verify = async (role) => {
      const data = post(`${baseUrl}/verify`, { role }, true);
      return data;
   };

   const verifyEmployee = async () => {
      const data = post(`${baseUrl}/verify/employee`, {}, true);
      return data;
   };

   const verifyHr = async () => {
      const data = post(`${baseUrl}/verify/hr`, {}, true);
      return data;
   };

   const verifyAdmin = async () => {
      const data = post(`${baseUrl}/verify/admin`, {}, true);
      return data;
   };

   const getTasks = async () => {
      const data = get(`${baseUrl}/task/getTasks`, true);
      return data;
   };

   const postTask = async ({ name, time }) => {
      const data = post(`${baseUrl}/task/postTask`, { name, time }, true);
      return data;
   };

   const updateTask = async ({ id, status }) => {
      const data = put(`${baseUrl}/task/updateTask/${id}`, { status }, true);
      return data;
   };

   const deleteTask = async ({ id }) => {
      const data = deleteReq(`${baseUrl}/task/deleteTask/${id}`, true);
      return data;
   };

   const forgetPassword = async ({ email, employeeCode }) => {
      const data = post(`${baseUrl}/user/forgetPassword`, { email, employeeCode }, false);
      return data;
   };

   const forgetPassword1 = async ({ email, otp }) => {
      const data = post(`${baseUrl}/user/forgetPassword1`, { email, otp }, false);
      return data;
   };

   const forgetPassword2 = async ({ email, password }) => {
      const data = post(`${baseUrl}/user/forgetPassword2`, { email, password }, false);
      return data;
   };

   const changePassword = async ({ oldPassword, currentPassword }) => {
      const data = post(`${baseUrl}/user/changePassword`, { oldPassword, currentPassword }, true);
      return data;
   };

   const changePassword1 = async ({ oldPassword, currentPassword }) => {
      const data = post(`${baseUrl}/auth/changePassword`, { oldPassword, currentPassword }, true);
      return data;
   };

   const updateProfile = async ({ fullName, mobile, email, image, email1, password, gmail, department, designation, pan, adhar, father, currentAddress, currentState, currentPin, residence, perState, perCity, perPin, Martial, nationality, Mother, }) => {
      const data = put(`${baseUrl}/user/updateProfile`, { fullName, mobile, email, image, email1, password, gmail, department, designation, pan, adhar, father, currentAddress, currentState, currentPin, residence, perState, perCity, perPin, Martial, nationality, Mother }, true);
      return data;
   };

   const updateAdminProfile = async ({ fullName, dob, mobile, email, password, employeeCode }) => {
      const data = put(`${baseUrl}/admin/updateAdmin`, { fullName, dob, mobile, email, password, employeeCode }, true);
      return data;
   };

   const getChats = async () => {
      const data = get(`${baseUrl}/chat/getChats`, true);
      return data;
   };

   const getChat = async ({ id }) => {
      const data = get(`${baseUrl}/chat/getChat/${id}`, true);
      return data;
   };

   const getChatByUser = async ({ userId }) => {
      const data = get(`${baseUrl}/chat/getChatByUser?userId=${userId}`, true);
      return data;
   };

   const createNewChat = async ({ user, message }) => {
      const data = post(`${baseUrl}/chat/createNewChat`, { user, message }, true);
      return data;
   };

   const postMessage = async ({ id, message }) => {
      const data = put(`${baseUrl}/chat/postMessage/${id}`, { message }, true);
      return data;
   };

   const deleteChat = async ({ id }) => {
      const data = deleteReq(`${baseUrl}/chat/deleteChat/${id}`, true);
      return data;
   };

   const adminLogin = async ({ email, password }) => {
      const data = post(`${baseUrl}/admin/loginAdmin`, { email, password }, false);
      return data;
   };

   const topDash = async () => {
      const data = get(`${baseUrl}/admin/topDash`, true);
      return data;
   };

   const postAnnouncement = async ({ image, message, date }) => {
      const data = post(`${baseUrl}/announcement/postAnnouncement`, { image, message, date }, true);
      return data;
   };

   const updateAnnouncement = async ({ image, message, date, _id }) => {
      const data = put(`${baseUrl}/announcement/updateAnnouncement/${_id}`, { image, message, date }, true);
      return data;
   };

   const getAnnouncements = async (page, perPage, date) => {
      const data = get(`${baseUrl}/announcement/getAnnouncements?page=${page}&perPage=${perPage}&date=${date}`, true);
      return data;
   };

   const getAnnouncementDates = async () => {
      const data = get(`${baseUrl}/announcement/getAnnouncementDates`, true);
      return data;
   };

   const deleteAnnouncement = async ({ id }) => {
      const data = deleteReq(`${baseUrl}/announcement/deleteAnnouncement/${id}`, true);
      return data;
   };

   const getAttendance = async () => {
      const data = get(`${baseUrl}/attendance/getAttendance`, true);
      return data;
   };

   const getAttendanceByUser = async (userId, date, month, year, page, perPage) => {
      const data = get(`${baseUrl}/attendance/getAttendanceByUser?userId=${userId}&date=${date}&month=${month}&year=${year}&page=${page}&perPage=${perPage}`, true);
      return data;
   };


   const updateUser = async (userId, value1, value2, value3, value4, value5) => {
      console.log({ ...value2 });
      const data = put(`${baseUrl}/user/updateUser/${userId}`, { ...value1, ...value2, ...value3, ...value4, ...value5 }, true);
      return data;
   };

   return (
      <MainContext.Provider value={{ login, employeeLogin, employeeResetPassword, hrLogin, createHr, getHrs, deleteHr, createEmployee, getEmployees, getUsers, getAdminEmployees, postActivity, postActivityHr, getActivitiesByUser, getStatisticsByUser, postLeave, updateLeave, getUserLeaves, getUserLeaveById, deleteLeave, getTotalLeaves, postTotalLeaves, verifyEmployee, verifyHr, verifyAdmin, setUser, user, getProjects, postProject, getHolidays, postHoliday, updateProject, getProjectsByEmployee, getTasks, postTask, updateTask, deleteTask, setFlag, flag, changePassword, updateProfile, deleteHoliday, updateHoliday, deleteProject, getChats, createNewChat, postMessage, deleteChat, adminLogin, getChat, getChatByUser, setChatUser, chatUser, getEmployeesByEmployee, topDash, postAnnouncement, updateAnnouncement, getAnnouncements, getAnnouncementDates, deleteAnnouncement, getAttendance, getAttendanceByUser, createEmployee1, updateAdminProfile, changePassword1, verify, updateUser, forgetPassword, forgetPassword1, forgetPassword2 }}>
         {props.children}
      </MainContext.Provider>
   );
};

export default MainState