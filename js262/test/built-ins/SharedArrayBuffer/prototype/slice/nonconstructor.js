

/*---
description: >
  SharedArrayBuffer.prototype.slice is not a constructor function.
info: |
  SharedArrayBuffer.prototype.slice ( start, end )

  17 ECMAScript Standard Built-in Objects:
    Built-in function objects that are not identified as constructors do not
    implement the [[Construct]] internal method unless otherwise specified
    in the description of a particular function.
includes: [isConstructor.js]
features: [SharedArrayBuffer, Reflect.construct]
---*/

assert(!isConstructor(SharedArrayBuffer.prototype.slice), "SharedArrayBuffer.prototype.slice is not a constructor");

var arrayBuffer = new SharedArrayBuffer(8);
assert.throws(TypeError, function() {
  new arrayBuffer.slice();
});
