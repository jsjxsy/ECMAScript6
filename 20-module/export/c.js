//导出对象
// 写法一：导出一个对象
// export default {
//     code: 1,
//     message: 'success'
// }
//
// // 写法二：导出多个对象
// const data = {code: 1}
// const des = {age: 26}
// export {
//     data,
//     des
// }
//
const data = {code: 1}
const des = {age: 26}
//可以默认导出多个对象
export default {
    data,
    des
}

