

/*---
info: The Object.prototype property has the attribute ReadOnly
es5id: 15.2.3.1_A1
description: Checking if varying "Object.prototype" property fails
includes: [propertyHelper.js]
---*/

var obj = Object.prototype;
verifyNotWritable(Object, "prototype", null, function() {
  return "shifted";
});

assert.sameValue(Object.prototype, obj, 'The value of Object.prototype is expected to equal the value of obj');

try {
  Object.prototype();
  throw new Test262Error('#2: the Object.prototype property has the attributes ReadOnly');
} catch (e) {
  if (e instanceof Test262Error) {
    throw e;
  }
}

