require('dotenv').config();
const range_ages = require('./models/range_ages'); 
const usersModel = require('./models/users'); 
const categories = require('./models/categories');
const subjects = require('./models/subjects');
const express = require('express');
const router = require('./routers/index');
const cors = require('cors');
const app = express();

 const fill = require('./utilities/filllTables');               /////////////////////test


app.use(cors({origin:['http://localhost:3000','http://localhost:3001','http://localhost:3002','http://localhost:3003'],credentials:true}));
app.use(express.json());
app.use(router);


app.listen(process.env.PORT, () => {
    fill();
    console.log(`app listen on port ${process.env.PORT}`);
});



