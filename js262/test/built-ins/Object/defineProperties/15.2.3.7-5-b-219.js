

/*---
es5id: 15.2.3.7-5-b-219
description: >
    Object.defineProperties - value of 'get' property of 'descObj' is
    primitive values( value is boolean) (8.10.5 step 7.b)
---*/

var obj = {};
assert.throws(TypeError, function() {
  Object.defineProperties(obj, {
    property: {
      get: false
    }
  });
});
