const activitiesRouter= require('express').Router();
const {reactToPost,rateUser} =require('../controllers/activityController');


activitiesRouter.post('/react-to-post',reactToPost);
activitiesRouter.put('/rate-user',rateUser);



module.exports = activitiesRouter