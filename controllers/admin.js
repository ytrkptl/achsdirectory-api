function ContactObject(id, contacts) {
    this.id = id;
    this.contacts = contacts;
}
 function contacts(lastname, firstname, phone, department, email, id, url, room, firstblock, secondblock, thirdblock, fourthblock, lunch) {
    this.lastname = lastname;
    this.firstname = firstname;
    this.phone = phone;
    this.department = department;
    this.email = email;
    this.id = id;
    this.url = url;
    this.room = room;
    this.firstblock = firstblock;
    this.secondblock = secondblock;
    this.thirdblock = thirdblock;
    this.fourthblock = fourthblock;
    this.lunch = lunch;
}

const handleAddEmployee = (req, res, base) => {
    // const table = base('home');
    // table.create({
    //   "lastname": "zzimm",
    //   "firstname": "zzhall",
    //   "phone": "0034",
    //   "Room": "zA01",
    //   "firstblock": "zA01",
    //   "secondblock": "zA01",
    //   "thirdblock": "zA04",
    //   "fourthblock": "Planning",
    //   "lunch": "1st",
    //   "department": "math"
    // }, function(err, record) {
    //   if (err) {
    //     console.error(err);
    //     res.json(err)
    //     return;
    //   }
    //   console.log(record.getId());
    //   res.json(record.getId());
    // });
    
}

module.exports = {
  handleAddEmployee
}