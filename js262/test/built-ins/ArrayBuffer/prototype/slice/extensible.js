

/*---
esid: sec-arraybuffer.prototype.slice
description: >
  ArrayBuffer.prototype.slice is extensible.
info: |
  ArrayBuffer.prototype.slice ( start, end )

  17 ECMAScript Standard Built-in Objects:
    Unless specified otherwise, the [[Extensible]] internal slot
    of a built-in object initially has the value true.
---*/

assert(Object.isExtensible(ArrayBuffer.prototype.slice));
