

/*---
es5id: 15.2.3.12-2-a-8
description: >
    Object.isFrozen - 'P' is own accessor property without a get
    function that overrides an inherited accessor property
---*/

var proto = {};

Object.defineProperty(proto, "foo", {
  get: function() {
    return 9;
  },
  configurable: false
});

var Con = function() {};
Con.prototype = proto;
var child = new Con();

Object.defineProperty(child, "foo", {
  set: function() {},
  configurable: true
});

Object.preventExtensions(child);

assert.sameValue(Object.isFrozen(child), false, 'Object.isFrozen(child)');
