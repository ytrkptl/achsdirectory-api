const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const Airtable = require('airtable');
const knex = require('knex');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const tabs = require('./controllers/tabs');
const adminSignin = require('./controllers/adminSignin');
const addEmployee = require('./controllers/addEmployee');
const findRecordId = require('./controllers/findRecordId');
const editEmployee = require('./controllers/editEmployee');
const checkPhone = require('./controllers/checkPhone');

app.use(cors());
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// use Airtable to allow easy modifying of data for 
// school employees who don't know how to use 
// databases.
Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});
const base = Airtable.base(process.env.AIRTABLE_BASE);


// use postgres for managing admin signin
const db = knex({
  client: 'pg',
  connection: {
    connectionString : process.env.DATABASE_URL,
    ssl: true,
  }
});


// the home page of frontend calls this GET method
// NOTE: the base here refers to Airtable from above.
app.get('/', (req, res) => {
	res.send('It is working');
})

// the home page of frontend calls this GET method
// NOTE: the base here refers to Airtable from above.
app.get('/home', (req, res) => {
	tabs.handleDataRequestTwo(req, res, base);
})

// an endpoint to check phone number is valid
// not yet implemented
app.get('/checkphone/:phone', (req, res) => {
  checkPhone.handleCheckPhone(req, res);
})

// use this endpoint from frontend to allow the admin
// to sign in.  "db" refers to postgres database from above.
app.post('/adminsignin', (req, res) => { 
   adminSignin.handleAdminSignin(req, res, db, bcrypt);
})


// endpoint for adding employees when clicking on submit form under add employee section
app.post('/addemployee', (req, res) => { 
   addEmployee.handleAddEmployee(req, res, base);
})


// endpoint for adding employees when clicking on submit form under add employee section
// this one will search by lastname only
app.get('/findemployeeid/:lastname', (req, res) => { 
   findRecordId.handleFindRecordIdByLastname(req, res, base);
})


// endpoint for adding employees when clicking on submit form under add employee section
// this one will search by firstname only
app.get('/findemployeeid/none/:firstname', (req, res) => { 
   findRecordId.handleFindRecordIdByFirstname(req, res, base);
})


// endpoint for adding employees when clicking on submit form under add employee section
// this one will search by lastname and firstname
app.get('/findemployeeid/:lastname/:firstname', (req, res) => { 
   findRecordId.handleFindRecordIdByBoth(req, res, base);
})


// endpoint for editing/updating employees when clicking on edit employee section
app.post('/editemployee', (req, res) => { 
   editEmployee.handleEditEmployee(req, res, base);
})


// check .env file to see what port is being used.
app.listen(process.env.PORT, () => console.log(`app is running on port ${process.env.PORT}`))