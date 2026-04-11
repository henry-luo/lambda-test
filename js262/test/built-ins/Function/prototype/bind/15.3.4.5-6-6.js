

/*---
es5id: 15.3.4.5-6-6
description: Function.prototype.bind - F can get inherited accessor property
---*/

var foo = function() {};

var obj = foo.bind({});

Object.defineProperty(Function.prototype, "property", {
  get: function() {
    return 12;
  },
  configurable: true
});

assert.sameValue(obj.property, 12, 'obj.property');
