

/*---
esid: sec-arraybuffer.prototype.resize
description: ArrayBuffer.prototype.resize is extensible.
info: |
  ArrayBuffer.prototype.resize ( newLength )

  17 ECMAScript Standard Built-in Objects:
    Unless specified otherwise, the [[Extensible]] internal slot
    of a built-in object initially has the value true.
features: [resizable-arraybuffer]
---*/

assert(Object.isExtensible(ArrayBuffer.prototype.resize));
