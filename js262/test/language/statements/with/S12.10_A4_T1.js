

/*---
info: Changing property using "eval" statement containing "with" statement
es5id: 12.10_A4_T1
description: Changing string property
flags: [noStrict]
---*/

this.p1 = 1;
var myObj = {
  p1: 'a', 
}
eval("with(myObj){p1='b'}");


if(myObj.p1 !== 'b'){
  throw new Test262Error('#1: myObj.p1 === "b". Actual:  myObj.p1 ==='+ myObj.p1  );
}


if(myObj.p1 === 1){
  throw new Test262Error('#2: myObj.p1 !== 1');
}

