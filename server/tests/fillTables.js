const UserModel = require('../models/User')
const SubjectModel = require('../models/Subject')
const CategoryModel = require('../models/Category')

const fillTable = async () => {
    await CategoryModel.create({ name: 'english' })
    await CategoryModel.create({ name: 'math' })

    const user1 = await UserModel.create({ name: 'avi', email: 'avi@g.com', password: '1234', })
    console.log(user1);
    const user2 = await UserModel.create({ name: 'moshe', email: 'moshe@g.com', password: '1234' })

    const subject1 = await SubjectModel.create({ name: 'write english', category_id: '1' })
    const subject2 = await SubjectModel.create({ name: 'read english', category_id: '1' })
    const subject3 = await SubjectModel.create({ name: 'algebra', category_id: '2' })
    const subject4 = await SubjectModel.create({ name: 'infy', category_id: '2' })
    user1.addSubject(subject1)
    user1.addSubject(subject2)
    user1.addSubject(subject3)
    user2.addSubject(subject2)
    user2.addSubject(subject4)

}


module.exports = { fillTable }