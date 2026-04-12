

/*---
info: Values of the List type are simply ordered sequences of values
es5id: 8.8_A2_T1
description: Call function __mFunc(1,2,3) with 3 arguments
---*/

function __mFunc(){return arguments.length;};


if (__mFunc(1,2,3) !== 3){
  throw new Test262Error('#1: function __mFunc(){return arguments.length;}; __mFunc(1,2,3) === 3. Actual: ' + (__mFunc(1,2,3)));
}

