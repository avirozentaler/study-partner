require('dotenv').config();
const express = require('express');
// const cookieParser =require('cookie-parser');
const router = require('./routers/index');
const cors = require('cors');
const app = express();


// app.use(cors());
// app.use(cookieParser());
app.use(cors({origin:['http://localhost:3000','http://localhost:3001'],credentials:true}));
app.use(express.json());
app.use(router);






app.listen(process.env.PORT, () => {
    console.log(`app listen on port ${process.env.PORT}`);
});