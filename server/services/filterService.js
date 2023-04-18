const filterRepo = require('../repositories/filterRepo')
const {convertToReadingPossibility} = require('../utilities/post/adjustungPostData')


const filter = async (req) => {
    console.log('serv/////////////////////////');
    try {
        const { time } = req.body;
        // const answer = await filterRepo.filter({subject_name});
        // const answer = await filterRepo.filter(date);
        const answer = await filterRepo.filter(time);
        // console.log(answer);
        if (!answer || answer.message) {
            throw new Error("fail to get post or post not found ");
        }
        const result = answer?.map((post)=>{
            return convertToReadingPossibility(post)
        })
         return result;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

module.exports ={
    filter,
}