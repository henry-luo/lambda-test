

/*---
es5id: 15.2.3.6-4-196
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, 'name' is own accessor property that overrides an
    inherited data property (15.4.5.1 step 4.c)
---*/


assert.throws(TypeError, function() {
  Object.defineProperty(Array.prototype, "0", {
    value: 11,
    configurable: true
  });

  var arrObj = [];
  Object.defineProperty(arrObj, "0", {
    get: function() {},
    configurable: false
  });

  Object.defineProperty(arrObj, "0", {
    configurable: true
  });
});
