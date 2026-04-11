

/*---
es5id: 15.2.3.5-4-26
description: >
    Object.create - TypeError is thrown when own enumerable accessor
    property of 'Properties' without a get function (15.2.3.7 step 5.a)
---*/

var props = {};
Object.defineProperty(props, "prop", {
  set: function() {},
  enumerable: true
});
assert.throws(TypeError, function() {
  Object.create({}, props);
});
