

/*---
es5id: 15.2.3.7-6-a-178
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property, 'P' is available String values that convert to
    numbers (15.4.5.1 step 4.a)
---*/

var arr = [0];

Object.defineProperties(arr, {
  "0": {
    value: 12
  }
});

assert.sameValue(arr[0], 12, 'arr[0]');
