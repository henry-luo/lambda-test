

/*---
info: "\"This\" operator only evaluates Expression"
es5id: 11.1.6_A3_T4
description: Applying grouping operator to undefined
---*/


if ((undefined) !== undefined) {
  throw new Test262Error('#1: (undefined) === undefined. Actual: ' + ((undefined)));
}


if ((void 0) !== void 0) {
  throw new Test262Error('#2: (void 0) === void 0. Actual: ' + ((void 0)));
}


if ((null) !== null) {
  throw new Test262Error('#2: (null) === null. Actual: ' + ((null)));
}
