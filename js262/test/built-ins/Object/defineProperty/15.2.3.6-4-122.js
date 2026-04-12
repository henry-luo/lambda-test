

/*---
es5id: 15.2.3.6-4-122
description: >
    Object.defineProperty - 'O' is an Array, 'name' is the length
    property of 'O', test TypeError is thrown when 'desc' is accessor
    descriptor (15.4.5.1 step 3.a.i)
---*/

var arrObj = [];
assert.throws(TypeError, function() {
  Object.defineProperty(arrObj, "length", {
    get: function() {
      return 2;
    }
  });
});
