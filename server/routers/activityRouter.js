const activitiesRouter= require('express').Router();
const {reactToPost,rateUser,confirmPost,denyPost} =require('../controllers/activityController');


activitiesRouter.post('/react-to-post',reactToPost);
activitiesRouter.post('/confirm-post',confirmPost);
activitiesRouter.post('/deny-post',denyPost);
activitiesRouter.put('/rate-user',rateUser);



module.exports = activitiesRouter