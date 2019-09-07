function ContactObject(id, contacts) {
    this.id = id;
    this.contacts = contacts;
}
 function contacts(id, lastname, firstname, phone, department, email, url, room, firstblock, secondblock, thirdblock, fourthblock, lunch) {
    this.id = id;
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

const handleDataRequestTwo = (req, res, base) => {
    const table = base('home');
    const recordObject = {
        arrayTwo: []
    };

    table.select({
        fields: ['number', 'lastname', 'firstname', 'phone', 'department', 'email', 'url', 'Room', 'firstblock', 'secondblock', 'thirdblock', 'fourthblock', 'lunch'],
        sort: [{field: "lastname", direction: "asc"}, {field: "firstname", direction: "asc"}],
        maxRecords: 100
    }).eachPage(function page(records) {
    // This function (`page`) will get called for each page of records.
    records.forEach(function(record) {
        let id = record.get('number');
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
        let contact = new contacts(id, lastname, firstname, phone, department, email, url, room, firstblock, secondblock, thirdblock, fourthblock, lunch);
        let contactObject = new ContactObject(id, contact);
        recordObject.arrayTwo.push(contactObject);
    });
    // fetchNextPage();
    res.json(recordObject.arrayTwo);
    }, function done(err) {
        if (err) { 
            console.error(err);
            res.json(err);
            return; 
        }
    });
}

module.exports = {
  handleDataRequestTwo
}