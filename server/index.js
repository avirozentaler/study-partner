require('dotenv').config();
const express = require('express');
const test = require('./tests/test');
const router = require('./routers/index');
const cors = require('cors');
const app = express();

const UserModel = require('./models/user');
const SubjectModel = require('./models/subject');
const CategoryModel = require('./models/category');
const User_subjectModel = require('./models/user_subjects');

app.use(cors({origin:['http://localhost:3000','http://localhost:3001','http://localhost:3002','http://localhost:3003'],credentials:true}));
app.use(express.json());
app.use(router);
app.use(test)


app.listen(process.env.PORT, () => {
    console.log(`app listen on port ${process.env.PORT}`);
});

