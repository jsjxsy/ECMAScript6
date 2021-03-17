//导出类
//way one
// export class Person{
// 	constructor(name, sex, age) {
// 		this.name = name;
// 		this.sex = sex;
// 		this.age = age;
// 	}
// 	get id(){
// 		return this.cardId;
// 	}
// 	set id(value){
// 		this.cardId = value
// 	}
// 	toString(){
// 		return `[id:${this.cardId} name:${this.name} sex:${this.sex} age:${this.age}]`
// 	}
// }

//way two
class Person{
	constructor(name, sex, age) {
		this.name = name;
		this.sex = sex;
		this.age = age;
	}
	get id(){
		return this.cardId;
	}
	set id(value){
		this.cardId = value
	}
	toString(){
		return `[id:${this.cardId} name:${this.name} sex:${this.sex} age:${this.age}]`
	}
}
export {
	Person
}

// way three
class Test {
	toString(){
		return "this is test class"
	}
}
export default Test

// //way four
// export default class {
// 	toString(){
// 		return "this is test class"
// 	}
// }
//
// //way five
// export class Test{
// 	toString(){
// 		return "this is test class"
// 	}
// }
