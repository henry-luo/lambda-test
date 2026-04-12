

/*---
es5id: 15.2.3.7-5-b-254
description: >
    Object.defineProperties - value of 'set' property of 'descObj' is
    primitive values boolean (8.10.5 step 8.b)
---*/

var obj = {};
assert.throws(TypeError, function() {
  Object.defineProperties(obj, {
    prop: {
      set: true
    }
  });
});
