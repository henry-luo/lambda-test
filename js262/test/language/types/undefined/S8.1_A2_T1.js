

/*---
info: Any variable that has not been assigned a value has the value undefined
es5id: 8.1_A2_T1
description: Check that var x have value and type undefined
---*/

var x;


if (!(x === undefined)) {
  throw new Test262Error('#1: var x; x === undefined. Actual: ' + (x));
}


if (!(typeof(x) === "undefined")) {
  throw new Test262Error('#2: var x; typeof(x) === "undefined". Actual: ' + (typeof(x)));
}


if (!(x === void 0)) {
  throw new Test262Error('#3: var x; x === void 0. Actual: ' + (x));
}

