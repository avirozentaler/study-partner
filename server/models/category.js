
const db = require('../db/mysql');
const { DataTypes } = require('sequelize');

const Category = db.define('category', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
        
    },
    user_connected: {
        type: DataTypes.INTEGER,
        allowNull:true
    }
},
{
    timestamps:false
}
);

(async () => {
    console.log('>> category model');

    await db.sync();
    console.log('>> category model');
})()

module.exports = Category