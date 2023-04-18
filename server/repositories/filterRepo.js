const { Op } = require('sequelize');
const PostModel = require('../models/Post');


// const filter = async ({subject_name}) => {
//     console.log('serv/////////////////////////');
// console.log(subject_name);
//     try {
//         const answer = await PostModel.findAll({where:{sub_category:subject_name}});
//         return answer
//     }
//     catch (err) {
//         console.log(err);
//         return err;
//     }
// }


// const filter = async (date) => {
//     console.log('serv/////////////////////////');
//     try {
//         const answer = await PostModel.findAll(
//             {
//                 where: {
//                     [Op.and]: [
//                         { date_from: { [Op.lte]: date } },
//                         { date_to: { [Op.gte]: date } }
//                     ]
//                 }
//             });
//         return answer
//     }
//     catch (err) {
//         console.log(err);
//         return err;
//     }
// }


const filter = async (time) => {
    console.log('serv/////////////////////////');
    try {
        const answer = await PostModel.findAll(
            {
                where: {
                    [Op.and]: [
                        { time_from: { [Op.lte]: time } },
                        { time_to: { [Op.gte]: time } }
                    ]
                }
            });
        return answer
    }
    catch (err) {
        console.log(err);
        return err;
    }
}











module.exports = {
    filter,
}