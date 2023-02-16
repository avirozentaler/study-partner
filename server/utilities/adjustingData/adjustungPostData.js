

const convertToReadingPossibility =(post)=>{
    let Tfrom = new Date(post.time_from)
    let Tdate = new Date(post.date)
    let Tto = new Date(post.time_to)
     return {
         id: post.id,
         user_id: post.user_id,
         auther_name: post.auther_name,
         category: post.category,
         sub_category: post.sub_category,
         post: post.post,
         date: `${Tdate.getDate()<10?"0":""}${Tdate.getDate()}/${Tfrom.getMonth()<10?"0":""}${Tdate.getMonth()}/${Tdate.getFullYear()}`,
         time_from: `${Tfrom.getHours()<10?"0":""}${Tfrom.getHours()}:${Tfrom.getMinutes()<10?"0":""}${Tfrom.getMinutes()}`,
         time_to: `${Tto.getHours()<10?"0":""}${Tto.getHours()}:${Tto.getMinutes()<10?"0":""}${Tto.getMinutes()}`
     }
}

module.exports = convertToReadingPossibility;