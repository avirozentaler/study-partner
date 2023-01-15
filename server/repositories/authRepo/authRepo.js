
const { UserModel } = require('../../models/Models')


const logIn = async (email) => {
    try {
        const user = await UserModel.findOne({ where: { email } })
        return user

    }
    catch (err) {
        console.log(err);
        return err;
    }

}

const auth = async () => {
    try {

    }
    catch (err) {
        console.log(err);
    }
}

const forgetPassword = async () => {
    try {

    }
    catch (err) {
        console.log(err);
    }
}

const resetPassword = async () => {
    try {

    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    logIn,
    auth,
    forgetPassword,
    resetPassword,
}