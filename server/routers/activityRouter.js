const activitiesRouter= require('express').Router();
const {reactToPost} =require('../controllers/activityController');


activitiesRouter.post('/react-to-post',reactToPost);

module.exports = activitiesRouter