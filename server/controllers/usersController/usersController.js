
const user = require('../../models/user');




const register = async (req,res)=>{              /////////////validation needs
    try {
        const { name,email,password } = req.body;
        await user.create({name,email,password });        
        res.status(200).send('user registered');
    }
    catch (err) {
        res.send(err);
    }
}

const logIn =(req,res)=>{
    
}

module.exports ={
register,
logIn
}