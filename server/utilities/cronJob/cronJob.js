const cron = require('node-cron');
const { Sequelize, Op } = require('sequelize');
const Models = require('../../models/Models');

const removeOldPosts = async () => {
    const date = new Date().getTime();
    await Models.PostModel.destroy({ where: { time_to: { [Op.lt]: date } } })
    console.log('remove old posts');
}

module.exports = removeOldPosts;