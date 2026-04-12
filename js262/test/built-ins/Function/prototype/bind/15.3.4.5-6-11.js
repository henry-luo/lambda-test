

/*---
es5id: 15.3.4.5-6-11
description: >
    Function.prototype.bind - F can get inherited accessor property
    without a get function
---*/

var foo = function() {};

var obj = foo.bind({});

Object.defineProperty(Function.prototype, "property", {
  set: function() {},
  configurable: true
});

assert.sameValue(typeof(obj.property), "undefined", 'typeof (obj.property)');
