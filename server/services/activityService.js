const activityRepo =require('../repositories/activityRepo');
const userRepo =require('../repositories/userRepo');
const postRepo =require('../repositories/postRepo');
const {transferMail} = require('../utilities/mailer/mailer')


const reactToPost = async(req)=>{
    try{
        const {postId,userId } = req.body;
        const user = await userRepo.getOneUser(null,userId ||null);
        if(user.message){
            throw new Error("user not found");
        }
        //postRepo.find...
        //missing validate to post. to check if exist and if the time is latest than now (even a few minutes later...) 
        const titleMessage ='somone wants to practice with you'; 
        const htmlMessage =`<div>
        <h4>hii ${user.name}! </h4>
        <p>someone answer your post request to practice... 
        please click <a href=url>here</a> to confirm.
        have a nice day !!</p>
        </div>`;
        console.log('error >>',user.message);
        const sendEmail = await transferMail(user.email,titleMessage,"" ,htmlMessage);
        console.log(sendEmail);
        postRepo.updatePost(postId,{mathed:true});
        return "email sent";
    }
    catch(err){
    console.log(err);
    return err
    }

}



module.exports = activityService = {
    reactToPost,
}