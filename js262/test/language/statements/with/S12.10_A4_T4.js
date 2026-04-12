

/*---
info: Changing property using "eval" statement containing "with" statement
es5id: 12.10_A4_T4
description: Changing object property
flags: [noStrict]
---*/

this.p1 = 'a';
var myObj = {
  p1: {a:"hello"}, 
}
eval("with(myObj){p1={b:'hi'}}");


if(myObj.p1.a === "hello"){
  throw new Test262Error('#1: myObj.p1.a !== "hello"');
}


if(myObj.p1.b !== "hi"){
  throw new Test262Error('#2: myObj.p1.b === "hi". Actual:  myObj.p1.b ==='+ myObj.p1.b  );
}


if(myObj.p1 === 'a'){
  throw new Test262Error('#3: myObj.p1 !== \'a\'');
}

