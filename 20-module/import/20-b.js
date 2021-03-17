// import Test, {Person as P} from "../export/b.js"
// const p = new P("li is","female", 24);
// p.id = 111111
// console.log(p.toString())
// console.log(new Test().toString())

import * as Mod from "../export/b.js"
const p = new Mod.Person("zhang san", "male", 30)
p.id = 22222
console.log(p.toString())
const t = new Mod.default()
console.log(t.toString())

