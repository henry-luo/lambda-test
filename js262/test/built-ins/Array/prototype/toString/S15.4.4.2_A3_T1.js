

/*---
esid: sec-array.prototype.tostring
info: "[[Get]] from not an inherited property"
es5id: 15.4.4.2_A3_T1
description: "[[Prototype]] of Array instance is Array.prototype"
---*/

Array.prototype[1] = 1;
var x = [0];
x.length = 2;
if (x.toString() !== "0,1") {
  throw new Test262Error('#1: Array.prototype[1] = 1; x = [0]; x.length = 2; x.toString() === "0,1". Actual: ' + (x.toString()));
}
