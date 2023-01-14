const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BCRYPT_ROUNDS = parseInt(process.env.BCRYPT_ROUNDS);
const { nameValid, emailValid, passwordValid, countryValid, languagesValid, phone_numberValid, age_rangeValid } = require('../../utilities/validations/validations');
const UserRepo = require('../../repositories/userRepo/userRepo');


const addUser = async (reqBody) => {

    try {
        const { name, email, password, confirmPassword, country, languages, phone_number,age } = reqBody;
        if (!name || !email || !password || !confirmPassword || !languages) {
            throw new Error('please fill all the fields');
        }
        else if (!nameValid(name)) { throw Error('name not valid') }
        else if (!emailValid(email)) { throw Error('email not valid') }
        else if (!passwordValid(password)) { throw Error('password not valid') }
        else if (!languagesValid) { throw Error('language is not valid') }
        else if (password !== confirmPassword) { throw Error('auth faild') }
        else if (country && !countryValid) { throw Error('country is not valid') }
        else if (phone_number && !phone_numberValid) { throw Error('phone number is not valid') }
        else if (age && !age_rangeValid) { throw Error('age is not valid') }
        else{
            const hashPssword = bcrypt.hashSync(password, BCRYPT_ROUNDS);
            const answer = await UserRepo.addUser({
                name,
                email,
                password:hashPssword,
                country,
                languages,
                phone_number,
                age_range: age 
            });
            return answer;
        }

        
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

const getAllUsers = async () => {
    try {
        const answer = await UserRepo.getAllUsers();
        if (!answer.message) {
            const result = answer.map((user) => {
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    country: user.country,
                    languages: user.languages,
                    phone_number: user.phone_number,
                    age_range: user.age_range,
                }
            })
            return result
        }
        return answer
    }
    catch (err) {
        console.log(err);
        return err
    }
}

const getOneUser = async (reqBody) => {
    const { email } = reqBody;
    try {
        const answer = await UserRepo.getOneUser(email);
        console.log(answer);
        console.log(answer.email);
        if (!answer.message) {
            return {
                id: answer.id,
                name: answer.name,
                email: answer.email,
                country: answer.country,
                languages: answer.languages,
                phone_number: answer.phone_number,
                age_range: answer.age_range,
            }
        }
        return answer;
    }
    catch (err) {
        return err;
    }
}

const updateUser = async (reqBody) => {
    const { email, name, country, languages, phone_number,age } = reqBody
    try {
        const newValues = {
            name: name || undefined,
            country: country || undefined,
            languages: languages || undefined,
            phone_number: phone_number || undefined,
            age_range: age || undefined,
        }
        const answer = await UserRepo.updateUser(email, newValues);
        return answer;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

const deleteUser = async (reqBody) => {
    try {
        const { email } = reqBody;
        const answer = await UserRepo.deleteUser(email);
        return answer
    }
    catch (err) {
        console.log(err);
        return err;
    }
}


module.exports = {
    addUser, getAllUsers, getOneUser, updateUser, deleteUser
};

