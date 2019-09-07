const handleCheckPhone = (req, res) => {
    //phone number that was received
    let phone = req.params.phone;
    // check if phone is not a number
    if (isNaN(phone)) {
        return res.json('not a number');
    } else {
        return res.json('number');  
    }
}

module.exports = {
  handleCheckPhone
}