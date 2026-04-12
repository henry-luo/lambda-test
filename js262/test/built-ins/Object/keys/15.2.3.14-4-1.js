

/*---
es5id: 15.2.3.14-4-1
description: Object.keys - elements of the returned array start from index 0
---*/

var obj = {
  prop1: 1001,
  prop2: 1002
};

Object.defineProperty(obj, "prop3", {
  value: 1003,
  enumerable: true,
  configurable: true
});

Object.defineProperty(obj, "prop4", {
  get: function() {
    return 1003;
  },
  enumerable: true,
  configurable: true
});

var arr = Object.keys(obj);

assert(arr.hasOwnProperty(0), 'arr.hasOwnProperty(0) !== true');
assert.sameValue(arr[0], "prop1", 'arr[0]');
