

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter - element to be retrieved is inherited
    accessor property on an Array-like object
---*/

function callbackfn(val, idx, obj) {
  return val === 11 && idx === 1;
}

var proto = {};

Object.defineProperty(proto, "1", {
  get: function() {
    return 11;
  },
  configurable: true
});

var Con = function() {};
Con.prototype = proto;

var child = new Con();
child.length = 20;
var newArr = Array.prototype.filter.call(child, callbackfn);

assert.sameValue(newArr.length, 1, 'newArr.length');
assert.sameValue(newArr[0], 11, 'newArr[0]');
