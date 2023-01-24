const { nameValid, emailValid, passwordValid, countryValid, languagesValid, phone_numberValid, age_rangeValid } = require('../utilities/validations/validations');
const UserModel = require('../models/User');


const validUserDetails = async (req, res,next) => {
    try {
        const { name, email, country, languages, phone_number, age_range } = req.body;
        if (name && !nameValid) { throw Error('name not valid') }
        if (email && !emailValid) { throw Error('email not valid') }
        if (country && !countryValid) { throw Error('country not valid') }
        if (languages && !languagesValid) { throw Error('languages not valid') }
        if (phone_number && !phone_numberValid) { throw Error('phone number not valid') }
        if (age_range && !age_rangeValid) { throw Error('age not valid') }
        next();
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err)
    }


}
const updateUserDetails = async (req, res) => {
    try {
        const {current_email, name, email, country, languages, phone_number, age_range } = req.body;
        await UserModel.update({name,email,country,languages,phone_number,age_range},{where:{email:current_email}});
        res.status(200).send('update successfully');
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err)
    }


}

const addUserSubject = async (req, res) => {
    try {
    }
    catch (err) {
    }


}



module.exports = {
    validUserDetails,
    updateUserDetails,
    addUserSubject,


}