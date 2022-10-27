const jwt = require('jsonwebtoken');
// const userModel = require('../../models/user');
const token= process.env.TOKEN_NAME
const auth = async (req, res) => {
    try {
        const cookie = req.cookies.token;
        console.log(cookie);

        if (!cookie) {
            res.status(403).send({ message: 'auth faild' })
        }
        else {
            const isVarify = jwt.verify(cookie,process.env.SECRET_KEY);
            // const user = userModel.findOne({where:{email:isVarify.email}});

            if(isVarify.email){
            res.status(200).send({ message: 'access exist' });
            }
        }
    }
    catch (err) {
        res.status(405).send(err)
    }


}


module.exports = {
    auth,
}
