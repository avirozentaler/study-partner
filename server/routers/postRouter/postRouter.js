const postRouter = require('express').Router()
const {addPost} = require('../../controllers/postController/addPostController')



postRouter.post('/add',addPost);




module.exports = postRouter;