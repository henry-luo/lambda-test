

/*---
es5id: 15.3.4.5-6-9
description: >
    Function.prototype.bind - F can get own accessor property without
    a get function
---*/

var foo = function() {};

var obj = foo.bind({});
Object.defineProperty(obj, "property", {
  set: function() {}
});

assert(obj.hasOwnProperty("property"), 'obj.hasOwnProperty("property") !== true');
assert.sameValue(typeof(obj.property), "undefined", 'typeof (obj.property)');
