

/*---
info: +Infinity expression has a type Number
es5id: 8.5_A7
description: Check type of +Infinity
---*/

var x=+Infinity;


if (typeof(x) !== "number"){
  throw new Test262Error('#1: var x=+Infinity; typeof(x) === "number". Actual: ' + (typeof(x)));
}


if (typeof(+Infinity) !== "number"){
  throw new Test262Error('#2: typeof(+Infinity) === "number". Actual: ' + (typeof(+Infinity)));
}

