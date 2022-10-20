

const db = require('../db/mysql')
const {DataTypes} = require('sequelize')



const users  = db.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
  
},
{
    timestamps: false
});

(async()=>{
    await db.sync();
 })()

module.exports = users;