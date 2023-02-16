
const activityService = require('../services/activityService');

const reactToPost = async (req, res) => {
    try {
        const answer = await activityService.reactToPost(req);
        if (answer.message) {
            throw new Error(answer.message)
        }
        res.status(200).send(answer);
    }
    catch (err) {
        console.log(err.message);
        res.status(402).send(err.message);
    }
}



module.exports = {
    reactToPost
}