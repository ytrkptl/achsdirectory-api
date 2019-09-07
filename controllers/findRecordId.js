function ContactObject(id, contacts) {
    this.id = id;
    this.contacts = contacts;
}
 function contacts(number, lastname, firstname, phone, department, email, url, room, firstblock, secondblock, thirdblock, fourthblock, lunch) {
    this.number = number;
    this.lastname = lastname;
    this.firstname = firstname;
    this.phone = phone;
    this.department = department;
    this.email = email;
    this.url = url;
    this.room = room;
    this.firstblock = firstblock;
    this.secondblock = secondblock;
    this.thirdblock = thirdblock;
    this.fourthblock = fourthblock;
    this.lunch = lunch;
}
const handleFindRecordIdByBoth = (req, res, base) => {
    const table = base('home');
    const recordObject = {
        message: '',
        arrayTwo: []
    };

    table.select().eachPage(function page(records) {
    // This function (`page`) will get called for each page of records.
    records.forEach(function(record) {
        let lastname = record.get('lastname').toLowerCase();
        let firstname = record.get('firstname').toLowerCase();

        if (lastname===req.params.lastname.toLowerCase() && firstname===req.params.firstname.toLowerCase()) {
          let recordId = record.getId();
          let number = record.get('number');
          let lastname = record.get('lastname');
          let firstname = record.get('firstname');
          let phone = record.get('phone');
          let department = record.get('department');
          let email = record.get('email');
          let url = record.get('url');
          let room = record.get('Room');
          let firstblock = record.get('firstblock');
          let secondblock = record.get('secondblock');
          let thirdblock = record.get('thirdblock');
          let fourthblock = record.get('fourthblock');
          let lunch = record.get('lunch');
          let contact = new contacts(number, lastname, firstname, phone, department, email, url, room, firstblock, secondblock, thirdblock, fourthblock, lunch);
          let contactObject = new ContactObject(recordId, contact);
          recordObject.arrayTwo.push(contactObject);
        }
    });
    let length = recordObject.arrayTwo.length;
    recordObject.message = `Found ${length} matches.`
    // fetchNextPage();
    res.json(recordObject);
    }, function done(err) {
        if (err) { 
            console.error(err);
            res.json(err);
            return; 
        }
    });
}
const handleFindRecordIdByLastname = (req, res, base) => {
    if(req.params.lastname==='' || req.params.lastname===undefined || req.params.lastname===null || req.params.lastname===!isNaN){
      res.json('check the lastname you entered again');
      return;
    }
    const table = base('home');
    const recordObject = {
        message: '',
        arrayTwo: []
    };

    table.select().eachPage(function page(records) {
    // This function (`page`) will get called for each page of records.
    records.forEach(function(record) {
        let lastname = record.get('lastname').toLowerCase();
        if (lastname===req.params.lastname.toLowerCase()) {
          let recordId = record.getId();
          let number = record.get('number');
          let lastname = record.get('lastname');
          let firstname = record.get('firstname');
          let phone = record.get('phone');
          let department = record.get('department');
          let email = record.get('email');
          let url = record.get('url');
          let room = record.get('Room');
          let firstblock = record.get('firstblock');
          let secondblock = record.get('secondblock');
          let thirdblock = record.get('thirdblock');
          let fourthblock = record.get('fourthblock');
          let lunch = record.get('lunch');
          let contact = new contacts(number, lastname, firstname, phone, department, email, url, room, firstblock, secondblock, thirdblock, fourthblock, lunch);
          let contactObject = new ContactObject(recordId, contact);
          recordObject.arrayTwo.push(contactObject);
        }
    });
    let length = recordObject.arrayTwo.length;
    recordObject.message = `Found ${length} matches.`,
    // fetchNextPage();
    res.json(recordObject);
    }, function done(err) {
        if (err) { 
            console.error(err);
            res.json(err);
            return; 
        }
    });
}

const handleFindRecordIdByFirstname = (req, res, base) => {
    const table = base('home');
    const recordObject = {
        message: '',
        arrayTwo: []
    };

    table.select().eachPage(function page(records) {
    // This function (`page`) will get called for each page of records.
    records.forEach(function(record) {
        let lastname = record.get('firstname').toLowerCase();
        if (lastname===req.params.firstname.toLowerCase()) {
          let recordId = record.getId();
          let number = record.get('number');
          let lastname = record.get('lastname');
          let firstname = record.get('firstname');
          let phone = record.get('phone');
          let department = record.get('department');
          let email = record.get('email');
          let url = record.get('url');
          let room = record.get('Room');
          let firstblock = record.get('firstblock');
          let secondblock = record.get('secondblock');
          let thirdblock = record.get('thirdblock');
          let fourthblock = record.get('fourthblock');
          let lunch = record.get('lunch');
          let contact = new contacts(number, lastname, firstname, phone, department, email, url, room, firstblock, secondblock, thirdblock, fourthblock, lunch);
          let contactObject = new ContactObject(recordId, contact);
          recordObject.arrayTwo.push(contactObject);
        }
    });
    let length = recordObject.arrayTwo.length;
    recordObject.message = `Found ${length} matches.`,
    // fetchNextPage();
    res.json(recordObject);
    }, function done(err) {
        if (err) { 
            console.error(err);
            res.json(err);
            return; 
        }
    });
}
module.exports = {
  handleFindRecordIdByBoth,
  handleFindRecordIdByLastname,
  handleFindRecordIdByFirstname
}