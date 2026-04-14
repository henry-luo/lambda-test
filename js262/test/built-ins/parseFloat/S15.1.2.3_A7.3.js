

/*---
info: The length property of parseFloat has the attribute ReadOnly
esid: sec-parsefloat-string
description: Checking if varying the length property fails
includes: [propertyHelper.js]
---*/


var x = parseFloat.length;
verifyNotWritable(parseFloat, "length", null, Infinity);
if (parseFloat.length !== x) {
  throw new Test262Error('#1: x = parseFloat.length; parseFloat.length = Infinity; parseFloat.length === x. Actual: ' + (parseFloat.length));
}
