require('dotenv').config();
const Models = require('../../models/Models');

const mathID = parseInt(process.env.MATH_CATEGORY);
const lnaguageID = parseInt(process.env.LANGUAGE_CATEGORY);
const softwareID = parseInt(process.env.SOFTWARE_CATEGORY);
const philosophyID = parseInt(process.env.PHILOSOPHY_CATEGORY);

const fillCategoryTable = async () => {
    const num = process.env.MATH_CATEGORY
    console.log(num);
    console.log(typeof num);

    try {
        await Models.CategoryModel.findOrCreate({ where: { id: mathID, name: "math" } });
        await Models.CategoryModel.findOrCreate({ where: { id: lnaguageID, name: "languages" } });
        await Models.CategoryModel.findOrCreate({ where: { id: softwareID, name: "software" } });
        await Models.CategoryModel.findOrCreate({ where: { id: philosophyID, name: "philosophy" } });
        return 'successful';
    }
    catch (err) {
        console.log(err);
        return 'ERROR';
    }

}
const fillSubjectTable = async () => {
    try {
        await Models.SubjectModel.findOrCreate({ where: { name: 'English', category_id: lnaguageID } });
        await Models.SubjectModel.findOrCreate({ where: { name: 'Hebrew', category_id: lnaguageID } });
        await Models.SubjectModel.findOrCreate({ where: { name: 'Arabic', category_id: lnaguageID } });
        await Models.SubjectModel.findOrCreate({ where: { name: 'Linear Algebra', category_id: mathID } });
        await Models.SubjectModel.findOrCreate({ where: { name: 'Geometry', category_id: mathID } });
        await Models.SubjectModel.findOrCreate({ where: { name: 'Statistics', category_id: mathID } });
        await Models.SubjectModel.findOrCreate({ where: { name: 'JavaScript', category_id: softwareID } });
        await Models.SubjectModel.findOrCreate({ where: { name: 'Java', category_id: softwareID } });
        await Models.SubjectModel.findOrCreate({ where: { name: 'Python', category_id: softwareID } });
        return 'successful'
    }
    catch (err) {
        console.log(err);
        return 'ERROR';
    }
}

module.exports = {
    fillCategoryTable,
    fillSubjectTable,
}   