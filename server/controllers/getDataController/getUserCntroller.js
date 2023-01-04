const PostModel = require('../../models/Post');
const Subject = require('../../models/Subject');
const UserModel = require('../../models/User');




const getUser = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await UserModel.findOne({ where: { email }, include: PostModel });
    //     res.status(200).send({ 
    //         name: user.name, 
    //         email: user.email,
    //         country: user.country, 
    //         age: user.age_range, 
    //         phone_number: user.phone_number, 
    //         subjects: user.subjects })
    // }
    res.status(200).send(user.posts);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err)
    }
}



module.exports = {
    getUser
}