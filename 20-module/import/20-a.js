console.log( "20-a,加载" );
//------------------------------------------
//import {m,n, add} from "../export/a.js"
// console.log(`n:${n} , m:${m}`)
// console.log("add", add(m,n))
//--------------------------------------------
// import {newN,m,add} from "../export/a.js";
//  console.log( "add",add( newN,m ) )
//--------------------------------
// import f from "../export/a.js";
// console.log("f="+ f )

// import {newN,m as newM,add} from "../export/a.js";
// console.log( add( newN,newM ) )

import * as tool from "../export/a.js";
console.log( tool.m,tool.newN,tool.default, tool.list )


