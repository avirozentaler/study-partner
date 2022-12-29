const postRouter = require('express').Router()
const {addPost,getPosts} = require('../../controllers/postController/addPostController')



postRouter.post('/add',addPost);
postRouter.get('/get-all',getPosts);




module.exports = postRouter;