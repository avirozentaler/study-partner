const { PostModel, UserModel, SubjectModel, CategoryModel } = require('../models/Models')

const fillTable = async () => {
    console.log('try to fill...');

    try {
        
        const post1 = await PostModel.create({ user_id: 1, auther_name: 'avi', sub_category: 'read english', post: "bla bla 1" });
        const post2 = await PostModel.create({ user_id: 2, auther_name: 'moshe', sub_category: 'read english', post: "bla bla 2" });
        const post3 = await PostModel.create({ user_id: 1, auther_name: 'avi', sub_category: 'learn english', post: "bla bla 3" });

        const user1 = await UserModel.findOrCreate({where:{ name: 'avi', email: 'avi@g.com', password: '1234', } } );
        const user2 = await UserModel.findOrCreate({where:{ name: 'moshe', email: 'moshe@g.com', password: '1234' }});


        const subject1 = await SubjectModel.findOrCreate({where:{ name: 'c#' }});
        const subject2 = await SubjectModel.findOrCreate({where:{ name: 'read english' }});
        const subject3 = await SubjectModel.findOrCreate({where:{ name: 'algebra' }});
        const subject4 = await SubjectModel.findOrCreate({where:{ name: 'infy' }});
        await user1.addPost(post1);
        await user1.addPost(post3);
        await user2.addPost(post2);
        await user1.addSubject(subject1);
        await user1.addSubject(subject2);
        await user1.addSubject(subject3);
        await user2.addSubject(subject2);
        await user2.addSubject(subject4);
        console.log('success filling');
        return 'yes'
    }

    catch (err) {
        console.log(err);
        return err
    }
}


module.exports = { fillTable }