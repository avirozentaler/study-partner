const Models = require('../../models/Models');


const addPost = async (details) => {
    try {
        const user = await Models.UserModel.findOne({ where: { id: details.userId } });
        if (!user) {
            throw new Error({ message: "user does not exist" });
        }
        await Models.PostModel.create({ user_id: user.id, auther_name: details.auther_name, category: details.category, sub_category: details.sub_category, post: details.post, date: details.date, time_from: details.time_from, time_to: details.time_to });
        return "post added";
    }
    catch (err) {
        console.log('REPO ERROR -----------------------------');
        console.log(err);
        return err;
    }


}

const getPosts = async () => {
    try {
        const answer = await Models.PostModel.findAll();
        return answer;
    }
    catch (err) {
        console.log('REPO ERROR -----------------------------');
        console.log(err);
        return err;
    }


}

const updatePost = async (id, updatedValues) => {
    try {
        console.log('eee');
        await Models.PostModel.update(updatedValues, { where: { id: id } });
        return "post updated";
    }
    catch (err) {
        return err;
    }


}

const deletePost = async (id) => {
    try {
        await Models.PostModel.destroy({ where: { id: id } });
        return "post deleted";
    }
    catch (err) {
        return err;
    }
}

module.exports = PostRepo = {
    addPost,
    getPosts,
    updatePost,
    deletePost
}



