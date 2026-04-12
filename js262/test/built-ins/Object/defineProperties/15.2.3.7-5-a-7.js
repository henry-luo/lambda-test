

/*---
es5id: 15.2.3.7-5-a-7
description: >
    Object.defineProperties - 'Properties' is a Function object which
    implements its own [[Get]] method to get enumerable own property
---*/

var obj = {};
var props = function() {};

Object.defineProperty(props, "prop", {
  value: {
    value: 7
  },
  enumerable: true
});

Object.defineProperties(obj, props);

assert(obj.hasOwnProperty("prop"), 'obj.hasOwnProperty("prop") !== true');
assert.sameValue(obj.prop, 7, 'obj.prop');
