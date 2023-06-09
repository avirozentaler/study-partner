const activityRepo = require('../repositories/activityRepo');
const userRepo = require('../repositories/userRepo');
const postRepo = require('../repositories/postRepo');
const { transferMail } = require('../utilities/mailer/mailer')
const { testMatched } = require('../utilities/post/postFunctions')
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const reactToPost = async (req) => {
    try {
        const { the_applicant_id, postId, day } = req.body;
        const post = await postRepo.getPost(postId);
        if (!post) {
            throw new Error("post not found");
        }
        const days = JSON.parse(post.days);
        if (days[day] === 0) {
            throw new Error("The day already taken or not able to study");
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
        <p>someone answer your post request to practice... on ${week[day]}</p>
        <p>please click  <a href=http://localhost:3000/confirm-post?pid=${postId}&aid=${the_applicant_id}&day=${day}> here </a> to confirm.</p>
        <p>have a nice day !!</p>
        <p>Study partner office</p>
        </div>`;
        const sendEmail = await transferMail(user.email, titleMessage, "", htmlMessage);
        if (sendEmail.message) {
            throw new Error(sendEmail.message)
        }
        return "email sent";
    }
    catch (err) {
        console.log(err);
        return err
    }
}

const confirmPost = async (req) => {
    try {
        const { applicantId, postId, day } = req.body;
        if (applicantId === undefined || postId === undefined || day === undefined) {
            throw new Error('error with request details.');
        }
        if (!day) {
            throw new Error('day not valid.');
        }
        const post = await postRepo.getPost(postId);
        if (!post) {
            throw new Error('post not found.');
        }
        const days = JSON.parse(post.days);
        if (days[day] === 0) {
            throw new Error('day already taken');
        }
        const autherPost = await userRepo.getOneUser(null, post.user_id);
        if (!autherPost) {
            throw new Error('auther not found.');
        }
        const applicant = await userRepo.getOneUser(null, applicantId);
        if (!applicant) {
            throw new Error('applicant not found.');
        }
        const transfer = await transferMail(applicant.email, `${autherPost.name}  want to study with you too`,
            `ypur partner ${autherPost.name} confirmed the meeting to study together..
            for mor information you can rich him by his phone number or email below.
            have fun.
            study partner office.
          
            ${autherPost.email} / ${autherPost.phone_number}`, null);
        days[day] = 0;
        const matched = testMatched(days)
        await postRepo.updatePost(post.id, { days, matched: matched });
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
        if (applicantId === undefined || postId === undefined) {
            throw new Error('error with request details.');
        }
        const post = await postRepo.getPost(postId);
        if (!post) {
            throw new Error('post not found.');
        }
        const autherPost = await userRepo.getOneUser(null, post.user_id);
        if (!autherPost) {
            throw new Error('auther not found.');
        }
        const applicant = await userRepo.getOneUser(null, applicantId);
        if (!applicant) {
            throw new Error('applicant not found.');
        }
        console.log('applicant.email >> ', applicant.email);

        const transfer = await transferMail(applicant.email, `${autherPost.name}  cenceled the meeting`, null,
            `<div>
                 <h4>hii ${applicant.name}!</h4>
                 <p>ypur part   ner ${autherPost.name} cancel the meeting to study together..
                 you able to  click  <a href=http://localhost:3000/> here </a>  to search other user's posts.
                 we wish you luck..
                 study partner office
                </p>
            </div>`);
        if (transfer.message) {
            throw new Error(transfer.message)
        }
        await postRepo.updatePost(postId, { mathed: 1 });
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
