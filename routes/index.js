const express = require("express");
const router = express.Router();
const base = require("../db").base;

// comes with Express.
const path = require("path");

const tabs = require("../controllers/tabs");
const adminSignin = require("../controllers/adminSignin");
const addEmployee = require("../controllers/addEmployee");
const findRecordId = require("../controllers/findRecordId");
const editEmployee = require("../controllers/editEmployee");
const checkPhone = require("../controllers/checkPhone");

// the home page of frontend calls this GET method
// NOTE: the base here refers to Airtable from above.
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

// the home page of frontend calls this GET method
// NOTE: the base here refers to Airtable from above.
router.get("/home", (req, res) => {
  tabs.handleDataRequestTwo(req, res, base);
});

// an endpoint to check phone number is valid
// not yet implemented
router.get("/checkphone/:phone", (req, res) => {
  checkPhone.handleCheckPhone(req, res);
});

// use this endpoint from frontend to allow the admin
// to sign in.  "db" refers to postgres database from above.
router.post("/adminsignin", (req, res) => {
  adminSignin.handleAdminSignin(req, res, db, bcrypt);
});

// endpoint for adding employees when clicking on submit form under add employee section
router.post("/addemployee", (req, res) => {
  addEmployee.handleAddEmployee(req, res, base);
});

// endpoint for adding employees when clicking on submit form under add employee section
// this one will search by lastname only
router.get("/findemployeeid/:lastname", (req, res) => {
  findRecordId.handleFindRecordIdByLastname(req, res, base);
});

// endpoint for adding employees when clicking on submit form under add employee section
// this one will search by firstname only
router.get("/findemployeeid/none/:firstname", (req, res) => {
  findRecordId.handleFindRecordIdByFirstname(req, res, base);
});

// endpoint for adding employees when clicking on submit form under add employee section
// this one will search by lastname and firstname
router.get("/findemployeeid/:lastname/:firstname", (req, res) => {
  findRecordId.handleFindRecordIdByBoth(req, res, base);
});

// endpoint for editing/updating employees when clicking on edit employee section
router.post("/editemployee", (req, res) => {
  editEmployee.handleEditEmployee(req, res, base);
});

module.exports = router;
