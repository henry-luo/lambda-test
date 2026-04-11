

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - 'length' is inherited accessor
    property without a get function on an Array-like object
---*/

var proto = {};
Object.defineProperty(proto, "length", {
  set: function() {},
  configurable: true
});

var Con = function() {};
Con.prototype = proto;

var child = new Con();
child[0] = true;

assert.sameValue(Array.prototype.lastIndexOf.call(child, true), -1, 'Array.prototype.lastIndexOf.call(child, true)');
