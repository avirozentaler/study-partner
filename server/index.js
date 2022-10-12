const express = require('express');
const app = express();
require('dotenv').config()

const cors = require('cors');


app.use(cors({origin:['http://localhost:3000'],credentials:true}));

app.get('/' , (req, res)=>{
    res.send("hiiiii")
})
app.listen(process.env.PORT, ()=>{
    console.log('app listen')
});