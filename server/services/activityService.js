const activityRepo = require('../repositories/activityRepo');
const userRepo = require('../repositories/userRepo');
const postRepo = require('../repositories/postRepo');
const { transferMail } = require('../utilities/mailer/mailer')

const reactToPost = async (req) => {
    try {
        const { postId, userId } = req.body;
        const user = await userRepo.getOneUser(null, userId || null);
        if (!user) {
            throw new Error("user not found");
        }
        if (user.message) {
            throw new Error("user not found");
        }
        //postRepo.find...
        //missing validate to post. to check if exist and if the time is latest than now (even a few minutes later...) 
        const titleMessage = 'somone wants to practice with you';
        const htmlMessage = `<div>
        <h4>hii ${user.name}! </h4>
        <p>someone answer your post request to practice... 
        please click <a href=url>here</a> to confirm.
        have a nice day !!</p>
        </div>`;
        const sendEmail = await transferMail(user.email, titleMessage, "", htmlMessage);
        console.log(sendEmail);
        postRepo.updatePost(postId, { mathed: true });
        return "email sent";
    }
    catch (err) {
        console.log('activity serv >> reactToPost >>error');
        console.log(err);   
        return err
    }

}


const rateUser = async (req) => {
    try {
        const { email, rate } = req.body;
        const user = await userRepo.getOneUser(email,null);
        console.log(user);
        if(!user){
            throw new Error('user not found');
        }
        const newRate =  (user.rate + rate ) / user.num_of_rates; 
        const answer = await userRepo.updateUser(email, null, { rate:newRate ,num_of_rates:user.num_of_rates +1});
        if(answer.message){
            throw new Error(answer.message)
        }
        return JSON.stringify(newRate);
    }
    catch (err) {
        console.log(err);
        return err
    }
}


module.exports = activityService = {
    reactToPost,
    rateUser
}
