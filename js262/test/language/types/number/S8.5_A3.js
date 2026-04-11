

/*---
info: NaN expression has a type Number
es5id: 8.5_A3
description: Check type of NaN
---*/

var x=NaN;


if (typeof(x) !== "number"){
  throw new Test262Error('#1: var x=NaN; typeof(x) === "number". Actual: ' + (typeof(x)));
}


if (typeof(NaN) !== "number"){
  throw new Test262Error('#2: typeof(NaN) === "number". Actual: ' + (typeof(NaN)));
}

