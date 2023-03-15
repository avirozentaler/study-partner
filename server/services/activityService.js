const activityRepo = require('../repositories/activityRepo');
const userRepo = require('../repositories/userRepo');
const postRepo = require('../repositories/postRepo');
const { transferMail } = require('../utilities/mailer/mailer')

const reactToPost = async (req) => {
    try {
        const { the_applicant_id, postId } = req.body;
        const post = await postRepo.getPost(postId);
        if (!post) {
            throw new Error("post not found");
        }
        if (post.mathed) {
            throw new Error("post already used");
        }
        const user = await userRepo.getOneUser(null, post.user_id || null);
        if (!user) {
            throw new Error("user not found");
        }
        if (user.message) {
            throw new Error("user not found");
        }
        const titleMessage = 'somone wants to practice with you';
        const htmlMessage = `<div>
        <h4>hii ${user.name}! </h4>
        <p>someone answer your post request to practice... 
        please click <a href=http://localhost:3000/confirm-post/${postId}/${the_applicant_id}>here</a> to confirm.
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

const confirmPost = async (req) => {
    try {
        const { applicantId, postId } = req.body;
        console.log('applicantId >> ', applicantId);
        console.log('postId >> ', postId);
        if (applicantId === undefined || postId === undefined) {
            throw new Error('error with request details.');
        }
        const post = await postRepo.getPost(postId);
        if (!post) {
            throw new Error('post not found.');
        }
        console.log('post >> ', post);
        const autherPost = await userRepo.getOneUser(null,post.user_id);
        console.log(autherPost);
        if (!autherPost) {
            throw new Error('auther not found.');
        }
        const applicant  = await userRepo.getOneUser(null,applicantId);
        console.log('applicant >> ',applicant);
        if (!applicant) {
            throw new Error('applicant not found.');
        }
        const transfer = await transferMail(applicant.email, `${autherPost.name}  want to study with you too`,
            `ypur partner ${autherPost.name} confirmed the meeting to study together..
            for mor information you can rich him by his phone number or email below.
            have fun.
            study partner office
            ${autherPost.email} / ${autherPost.phone_number}`, null);
        await postRepo.updatePost(postId, { mathed: true });
        return 'Email sent to the Partner';
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

const denyPost = async (req) => {
    try {
        const { applicantId, postId } = req.body;
        console.log('applicantId >> ', applicantId);
        console.log('postId >> ', postId);
        if (applicantId === undefined || postId === undefined) {
            throw new Error('error with request details.');
        }
        const post = await postRepo.getPost(postId);
        console.log('post >> ', post);
        if (!post) {
            throw new Error('post not found.');
        }
        console.log('user id post >>' ,post.user_id);
        const autherPost = await userRepo.getOneUser(null,post.user_id);
        console.log('autherPost >> ',autherPost);
        if (!autherPost) {
            throw new Error('auther not found.');
        }
        const applicant  = await userRepo.getOneUser(null,applicantId);
        console.log('applicant >> ',applicant);
        if (!applicant) {
            throw new Error('applicant not found.');
        }
        const transfer = await transferMail(
            applicant.email,
            `${autherPost.name}  cenceled the meeting`,
            null,
            `<div>
                 <h4>hii .. ! </h4>
                 <p>ypur part   ner ${autherPost.name} cancel the meeting to study together..
                 you able to  click  <a href=http://localhost:3000/> here </a>  to search other user's posts.
                 we wish you luck..
                 study partner office
                </p>
            </div>`);
        await postRepo.updatePost(postId, { mathed: false });
        return 'Email sent to the applicant';
    }
    catch (err) {
        console.log(err);
        return err
    }
}

const rateUser = async (req) => {
    try {
        const { email, rate } = req.body;
        const user = await userRepo.getOneUser(email, null);
        console.log(user);
        if (!user) {
            throw new Error('user not found');
        }
        const newRate = (user.rate + rate) / user.num_of_rates;
        const answer = await userRepo.updateUser(email, null, { rate: newRate, num_of_rates: user.num_of_rates + 1 });
        if (answer.message) {
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
    confirmPost,
    denyPost,
    rateUser
}
