
const db = require('../db/mysql');
const { DataTypes } = require('sequelize');

const categories = db.define('categories', {
    // id:{
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true,
    //     allowNull: false
    // },
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
const temp = ['languages','math','software','philosophy']
const categorydata = temp.map((item,index)=>{
    return {
        id: index+1,
        name:item
    }
});

(async () => {
    await db.sync();
    // await categories.bulkCreate(categorydata, {validate:true} )
})()

module.exports = categories