

/*---
esid: sec-arraybuffer.prototype.transfertofixedlength
description: ArrayBuffer.prototype.transferToFixedLength is extensible.
info: |
  ArrayBuffer.prototype.transferToFixedLength ( [ newLength ] )

  17 ECMAScript Standard Built-in Objects:
    Unless specified otherwise, the [[Extensible]] internal slot
    of a built-in object initially has the value true.
features: [arraybuffer-transfer]
---*/

assert(Object.isExtensible(ArrayBuffer.prototype.transferToFixedLength));
