const db = require('../db/mysql')
const {DataTypes} = require('sequelize')



const user  = db.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    
    refresh_token:{
        type :DataTypes.TEXT,
        allowNull:true, 
    }
},
{
    timestamps: false
});

(async()=>{
    await db.sync();
 })()

module.exports = user;

