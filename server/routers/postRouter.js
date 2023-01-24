const postRouter = require('express').Router()
const {addPost,getPosts,updatePost,deletePost} = require('../controllers/postController');



postRouter.post('/add',addPost);
// postRouter.post('/get-user-posts',addPost);
postRouter.get('/get-all',getPosts);
postRouter.put('/update',updatePost);
postRouter.delete('/delete',deletePost);



module.exports = postRouter;