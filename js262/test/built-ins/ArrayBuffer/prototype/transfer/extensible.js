

/*---
esid: sec-arraybuffer.prototype.transfer
description: ArrayBuffer.prototype.transfer is extensible.
info: |
  ArrayBuffer.prototype.transfer ( [ newLength ] )

  17 ECMAScript Standard Built-in Objects:
    Unless specified otherwise, the [[Extensible]] internal slot
    of a built-in object initially has the value true.
features: [arraybuffer-transfer]
---*/

assert(Object.isExtensible(ArrayBuffer.prototype.transfer));
