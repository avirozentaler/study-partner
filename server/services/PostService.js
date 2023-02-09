const PostRepo = require('../repositories/postRepo');

const addPost = async (reqBody) => {
    try {
        const { email, userId, auther_name, category, sub_category, post, date, time_from, time_to } = reqBody;
        const PostDetails = { email, userId, auther_name, category, sub_category, post, date: date, time_from: time_from, time_to: time_to };
        console.log(date);
        console.log(time_from);
        console.log(time_to);
        console.log(typeof date);
        const answer = await PostRepo.addPost(PostDetails);

        return answer;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

const getPosts = async () => {
    try {
        const answer = await PostRepo.getPosts();
        // answer = answer.map((post) => {
        //     return {
        //         id: post.id,
        //         user_id: post.user_id,
        //         auther_name: post.auther_name,
        //         category: post.category,
        //         sub_category: post.sub_category,
        //         post: post.post,
        //         date: new Date(post.date),
        //         time_from: new Date(post.time_from),
        //         time_to: new Date(post.time_to)
        //     }
        // })
        return answer;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}


const updatePost = async (reqBody) => {

    try {
        const { id, newPost, newDate, newTime_from, newTime_to } = reqBody;
        const updatedValues = {
            post: newPost || undefined,
            date: newDate || undefined,
            time_from: newTime_from || undefined,
            time_to: newTime_to || undefined
        }
        const answer = await PostRepo.updatePost(id, updatedValues);
        return answer;
    }
    catch (err) {
        return err;
    }
}

const deletePost = async (reqBody) => {
    const { id } = reqBody
    try {
        const answer = await PostRepo.deletePost(id);
        return answer;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

module.exports = PostService = {
    addPost,
    getPosts,
    updatePost,
    deletePost,

}

