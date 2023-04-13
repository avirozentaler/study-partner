
const convertToReadingPossibility =(post)=>{
    let Tfrom = new Date(post.time_from)
    let Tto = new Date(post.time_to)
    let Tdfr = new Date(post.date_from)
    let Tdto = new Date(post.date_to)
     return {
         id: post.id,
         user_id: post.user_id,
         auther_name: post.auther_name,
         category: post.category,
         sub_category: post.sub_category,
         post: post.post,
         date_from: `${Tdfr.getDate()<10?"0":""}${Tdfr.getDate()}/${Tdfr.getMonth()<10?"0":""}${Tdfr.getMonth()+1}/${Tdfr.getFullYear()}`||null,
         date_to: `${Tdto.getDate()<10?"0":""}${Tdto.getDate()}/${Tdto.getMonth()<10?"0":""}${Tdto.getMonth()+1}/${Tdto.getFullYear()}`||null,
         time_from: `${Tfrom.getHours()<10?"0":""}${Tfrom.getHours()}:${Tfrom.getMinutes()<10?"0":""}${Tfrom.getMinutes()}`,
         time_to: `${Tto.getHours()<10?"0":""}${Tto.getHours()}:${Tto.getMinutes()<10?"0":""}${Tto.getMinutes()}`,
         matched :post.matched,
         days:JSON.parse(post.days)   
     }
}

module.exports = {convertToReadingPossibility}