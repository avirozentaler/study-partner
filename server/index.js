require('dotenv').config();
const express = require('express');
const router = require('./routers/index');
const cors = require('cors');
const user = require('./models/user');
const app = express();


//app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(cors());
app.use(express.json());
app.use('/',router);




// app.post('/', async (req, res) => {
//     try {
//         const { name,email,password } = req.body;
//         console.log(  `${name} -- ${email} -- ${password}`)
//         await user.create({name,email,password });        
//         res.status(200).send('added');
//     }
//     catch (err) {
//         console.log(err)
//         res.send(err);
//     }
// });




// app.get('/', (req, res) => {


//     res.send("hiiiii")
// });


app.listen(process.env.PORT, () => {
    console.log(`app listen on port ${process.env.PORT}`);
});