
const { UserModel,PostModel,SubjectModel } = require('../../models/Models')

const addUser = async (user) => {
    try {
        const existuser = await UserModel.findOne({ where: { email: user.email } });
        if (existuser) {
            throw new Error("user already exist!");
        }
        await UserModel.create(user);
        return 'user added';
    }
    catch (err) {
        console.log(err);
        return err
    }
}

const getAllUsers = async () => {
    try {
        const answer = await UserModel.findAll();
        return answer;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

const getOneUser = async (email) => {

    try {
        const answer = await UserModel.findOne({ where: { email },include:PostModel});
        if (!answer) {
            throw new Error('user not found');
        }
        return answer;
    }
    catch (err) {
        return err;
    }
}

const updateUser = async (email, updatedValues) => {
    try {
        const answer = await UserModel.update(updatedValues, { where: { email } });
        if (!answer[0]) {
            throw new Error('user has not updated');
        }
        return 'user updated';
    }
    catch (err) {
        console.log(err);
        return err;
    }

}
const deleteUser = async (email) => {
    try {
        const answer = await UserModel.destroy({ where: { email } });
        return 'user deleted';
    }
    catch (err) {
        console.log(err);
        return err
    }
}

module.exports = {
    addUser, getAllUsers, getOneUser, updateUser, deleteUser
}