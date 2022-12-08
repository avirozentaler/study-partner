require('dotenv').config();
const UserModel = require('./models/User')
const SubjectModel = require('./models/Subject')
const CategoryModel = require('./models/Category')

const express = require('express');
const router = require('./routers/index');
// const testRouter = require('./tests/testDB');
const cors = require('cors');
const app = express();

app.use(cors({origin:['http://localhost:3000','http://localhost:3001','http://localhost:3002','http://localhost:3003'],credentials:true}));
app.use(express.json());
app.use(router);
// app.use(testRouter);

app.listen(process.env.PORT, () => {
    console.log(`app listen on port ${process.env.PORT}`);
});

