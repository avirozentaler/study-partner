const db = require('../db/mysql');
const { DataTypes } = require('sequelize');
const range_age = db.define('range_age', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    age_range: {
        type: DataTypes.STRING,
        allowNull: false

    },
},
    {
        timestamps: false
    }
);


const ageRangeData = []

for (let i = 1; i < 12; i ++) {
    ageRangeData.push({
        id: i,
        age_range: ((i * 5)+ 10 +i).toString() + " - " + ((i *5) + 15 + i).toString()
        
    })
}

(async () => {

    await db.sync({force:true});
    await range_age.bulkCreate(ageRangeData,{ validate: true, } );
})()

module.exports = range_age