

/*---
info: Error.prototype property has the attributes {ReadOnly}
es5id: 15.11.3.1_A3_T1
description: Checking if varying the Error.prototype property fails
includes: [propertyHelper.js]
---*/
assert(Error.hasOwnProperty('prototype'));

var __obj = Error.prototype;

verifyNotWritable(Error, "prototype", null, function() {
  return "shifted";
});

assert.sameValue(Error.prototype, __obj);

