//导出变量，方法，数组
console.log( "a.js被加载" )
let n = 100;
let m = 20;
function add(x,y){
	return x+y;
}
let list = [1,2,3]


//export { n,m,add}
export { n as newN ,m,add,list}
// export default 1000
// export default add;

// export let n = 100;
// export let m = 20;
// export function add(x,y){
// 	return x+y;
// }
// export let list = [1,2,3]
