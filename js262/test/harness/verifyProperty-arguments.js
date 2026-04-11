

/*---
description: >
  verifyProperty should receive at least 3 arguments: obj, name, and descriptor
includes: [propertyHelper.js]
---*/
assert.throws(Test262Error, () => {
  verifyProperty();
}, "0 arguments");

assert.throws(Test262Error, () => {
  verifyProperty(Object);
}, "1 argument");

assert.throws(Test262Error, () => {
  verifyProperty(Object, 'foo');
}, "2 arguments");
