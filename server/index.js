require('dotenv').config();

console.log('');
const Models = require('./models/Models');
const db = require('./db/mysql');


const express = require('express');
const router = require('./routers/index');
const testRouter = require('./tests/testDB');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const app = express();

app.use(cors({origin:['http://localhost:3000','http://localhost:3001','http://localhost:3002','http://localhost:3003'],credentials:true}));
app.use(express.json());
app.use(router);
app.use(testRouter);

app.listen(process.env.PORT, () => {
    (async ()=>{
        await db.sync();
        await Models.CategoryModel.findOrCreate( {where:{id:1, name:"math"}});
        await Models.CategoryModel.findOrCreate({where:{id:2,name:"languages"}});
        await Models.CategoryModel.findOrCreate({where:{id:3,name:"software"}});
    })()
    console.log(`app listen on port ${process.env.PORT}`);
});

