

/*---
description: >
  SharedArrayBuffer.prototype.slice is extensible.
info: |
  SharedArrayBuffer.prototype.slice ( start, end )

  17 ECMAScript Standard Built-in Objects:
    Unless specified otherwise, the [[Extensible]] internal slot
    of a built-in object initially has the value true.
features: [SharedArrayBuffer]
---*/

assert(Object.isExtensible(SharedArrayBuffer.prototype.slice));
