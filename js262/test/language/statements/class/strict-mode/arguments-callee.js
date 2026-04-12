

/*---
es6id: 14.5
description: >
    class strict mode
---*/
var D = class extends function() {
  arguments.callee;
} {};
assert.throws(TypeError, function() {
  Object.getPrototypeOf(D).arguments;
});
assert.throws(TypeError, function() {
  new D;
});
