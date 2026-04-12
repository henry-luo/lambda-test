

/*---
info: The length property of encodeURI has the attribute ReadOnly
esid: sec-encodeuri-uri
description: Checking if varying the length property fails
includes: [propertyHelper.js]
---*/


var x = encodeURI.length;
verifyNotWritable(encodeURI, "length", null, Infinity);
if (encodeURI.length !== x) {
  throw new Test262Error('#1: x = encodeURI.length; encodeURI.length = Infinity; encodeURI.length === x. Actual: ' + (encodeURI.length));
}
