

/*---
esid: sec-arraybuffer.prototype.transfer
description: >
  ArrayBuffer.prototype.transfer is not a constructor function.
info: |
  ArrayBuffer.prototype.transfer ( [ newLength ] )

  17 ECMAScript Standard Built-in Objects:
    Built-in function objects that are not identified as constructors do not
    implement the [[Construct]] internal method unless otherwise specified
    in the description of a particular function.
includes: [isConstructor.js]
features: [arraybuffer-transfer, Reflect.construct]
---*/

assert(!isConstructor(ArrayBuffer.prototype.transfer), "ArrayBuffer.prototype.transfer is not a constructor");

var arrayBuffer = new ArrayBuffer(8);
assert.throws(TypeError, function() {
  new arrayBuffer.transfer();
});
