const handleEditEmployee = (req, res, base) => {
    const table = base('home');
    table.update((''),{
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
  handleEditEmployee
}