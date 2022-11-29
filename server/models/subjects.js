const db = require('../db/mysql');
const { DataTypes } = require('sequelize');

const subjects = db.define('subjects', {
    
    name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    category_id: {
        type: DataTypes.STRING,
        allowNull: false
    }
    ,
    user_connected: {
        type: DataTypes.INTEGER,
        allowNull: true 
    }
},
    {
        timestamps: false
    }
);

const temp = ['english','algebra','react','aristo']
const subjectdata = temp.map((item,index)=>{
    return {
        // id: index+1,
        name:item,
        category_id:'1'
    }
});

(async () => {
    await db.sync();
    // await subjects.bulkCreate(categorydata, {validate:true} )
})()

module.exports = subjects