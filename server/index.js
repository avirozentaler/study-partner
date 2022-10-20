require('dotenv').config();
const express = require('express');
const cors = require('cors');
const users = require('./models/users');
const app = express();


//app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(cors());
app.use(express.json());





app.post('/', async (req, res) => {
    try {

        
const a = await users.findAll();

console.log(a);
        const { name, password } = req.body;
        await users.create({name,password});        
        res.send(a);
    }
    catch (err) {
        console.log(err)
    }

});




app.get('/', (req, res) => {


    res.send("hiiiii")
});


app.listen(process.env.PORT, () => {
    console.log(`app listen on port ${process.env.PORT}`);
});