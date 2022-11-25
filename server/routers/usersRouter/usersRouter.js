const userModel = require('../../models/users')
const categoriesModel = require('../../models/categories');
const range_agesModel = require('../../models/range_ages')


const express = require('express');
const userRouter = express.Router();
const { registerValid, register, logInValid, logIn } = require('../../controllers/usersController/usersController');
const { languagesValid } = require('../../utilities/validations/validations');
const categories = require('../../models/categories');
const range_ages = require('../../models/range_ages');


userRouter.post('/register', registerValid, register)
userRouter.post('/log-in', logInValid, logIn);
//log out router needed


userRouter.post('/add-lang', async(req, res) => {
    const { lnaguage } = req.body;
    console.log(lnaguage);
    try {
        await userModel.update({languages:lnaguage }, { where: { id: 1 } })
        res.status(200).send('cool')
    }
    catch (err) {
        res.status(500).send(err)
    }
})

userRouter.get('/user-details', async(req, res) => {
    try {
    //  const result = await userModel.findAll({include:range_agesModel,where:{id:1}}) 
    const user = await userModel.findOne({where:{id:1}})
    console.log(user);
    await userModel.hasMany(range_agesModel,) 
    range_agesModel.belongsTo(userModel);
    const result = await userModel.findAll({
        where : {id : 1},
        include: [{
          model:range_ages
        }]
      }); 
     
        res.status(200).send(result)
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err)
    }
})
 


module.exports = userRouter