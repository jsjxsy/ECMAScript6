// 值得注意的是，导入多个对象不适合用解构赋值
// import message, {data, des} from '../export/c.js'
// console.log(data)
// console.log(des)
// console.log(message)


// import {data, des} from '../export/c.js'// error
// console.log(data)
// console.log(des)

//应该先导入，再用解构赋值
import obj from '../export/c.js'
let {data, des} = obj
console.log(data)
console.log(des)
