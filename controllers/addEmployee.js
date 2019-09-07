// function ContactObject(id, contacts) {
//     this.id = id;
//     this.contacts = contacts;
// }
//  function contacts(lastname, firstname, phone, department, email, id, url, room, firstblock, secondblock, thirdblock, fourthblock, lunch) {
//     this.lastname = lastname;
//     this.firstname = firstname;
//     this.phone = phone;
//     this.department = department;
//     this.email = email;
//     this.id = id;
//     this.url = url;
//     this.room = room;
//     this.firstblock = firstblock;
//     this.secondblock = secondblock;
//     this.thirdblock = thirdblock;
//     this.fourthblock = fourthblock;
//     this.lunch = lunch;
// }

const handleAddEmployee = (req, res, base) => {
    const table = base('home');
    table.create({
      "lastname": req.body.lastname,
      "firstname": req.body.firstname,
      "phone": req.body.phone,
      "Room": req.body.Room,
      "firstblock": req.body.firstblock,
      "secondblock": req.body.secondblock,
      "thirdblock": req.body.thirdblock,
      "fourthblock": req.body.fourthblock,
      "lunch": req.body.lunch,
      "department": req.body.department
    }, function(err, record) {
      if (err) {
        console.error(err);
        res.json(err)
        return;
      }
      res.json(`success`);
    });
}

module.exports = {
  handleAddEmployee
}