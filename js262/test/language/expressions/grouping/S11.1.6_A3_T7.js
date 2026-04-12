

/*---
info: "\"This\" operator only evaluates Expression"
es5id: 11.1.6_A3_T7
description: Applying grouping operator to typeof operator
---*/


if (typeof (x) !== "undefined") {
  throw new Test262Error('#1: typeof (x) === "undefined". Actual: ' + (typeof (x)));
}
