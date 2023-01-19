
const { UserModel } = require('../../models/Models')


const logIn = async (email) => {
    try {
        const user = await UserModel.findOne({ where: { email } })
        if (!user) {
            throw new Error('user not found');
        }
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

const resetPassword = async (code,hashPssword) => {
    try {
        const user = await UserModel.findOne({ where: { refresh_token: code } });
        if (!user) {
            throw new Error('user not found');
        }
        const result = await UserModel.update({password:hashPssword,refresh_token:null});
        if(!result[0]){
            throw new Error('fail to update');
        }
        return result;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

module.exports = {
    logIn,
    auth,
    forgetPassword,
    resetPassword,
}