require('dotenv').config();

const db = require('./db/mysql');
const {fillCategoryTable,fillSubjectTable} = require('./utilities/dbUtilities/fillTables');

const express = require('express');
const router = require('./routers/index');
const testRouter = require('./tests/testDB');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const app = express();

app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002', 'http://localhost:3003'], credentials: true }));
app.use(express.json());
app.use(router);
app.use(testRouter);

app.listen(process.env.PORT, () => {
    (async () => {
        await db.sync();
        console.log(await fillCategoryTable());
        console.log(await fillSubjectTable());
    })()
    console.log(`app listen on port ${process.env.PORT}`);
});

