

/*---
es5id: 15.2.3.7-6-a-258
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property that already exists on 'O' is accessor property and
    'desc' is accessor descriptor, test setting the [[Set]] attribute
    value of 'P' as undefined  (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/


var arr = [];

Object.defineProperty(arr, "0", {
  set: function() {},
  configurable: true
});

Object.defineProperties(arr, {
  "0": {
    set: undefined
  }
});

verifyProperty(arr, "0", {
  enumerable: false,
  configurable: true,
});
