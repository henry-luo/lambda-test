

/*---
description: >
    Generator functions declared as methods cannot be used as constructors.
es6id: 14.4.13
features: [generators]
---*/

var method = { *method() {} }.method;

assert.throws(TypeError, function() {
  var instance = new method();
});
