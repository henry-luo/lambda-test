

/*---
es5id: 15.2.3.7-3-7
description: >
    Object.defineProperties - no additional property is defined in 'O'
    when 'Properties' doesn't contain enumerable own property
---*/

var obj = {};

var props = {};

Object.defineProperty(props, "prop1", {
  value: {},
  enumerable: false
});

Object.defineProperty(props, "prop2", {
  get: function() {
    return {};
  },
  enumerable: false
});

Object.defineProperties(obj, props);

assert.sameValue(obj.hasOwnProperty("prop1"), false, 'obj.hasOwnProperty("prop1")');
assert.sameValue(obj.hasOwnProperty("prop2"), false, 'obj.hasOwnProperty("prop2")');
