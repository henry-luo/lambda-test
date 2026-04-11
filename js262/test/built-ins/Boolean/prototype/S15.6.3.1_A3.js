

/*---
info: Boolean.prototype has the attribute DontDelete
esid: sec-boolean.prototype
description: Checking if deleting the Boolean.prototype property fails
includes: [propertyHelper.js]
flags: [onlyStrict]
---*/


verifyNotConfigurable(Boolean, "prototype");

assert.throws(TypeError, () => {
  delete Boolean.prototype;
});
