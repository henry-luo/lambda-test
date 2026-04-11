

/*---
description: >
  Uses default constructor is `constructor` property is undefined.
info: |
  SharedArrayBuffer.prototype.slice ( start, end )
features: [SharedArrayBuffer]
---*/

var arrayBuffer = new SharedArrayBuffer(8);
arrayBuffer.constructor = undefined;

var result = arrayBuffer.slice();
assert.sameValue(Object.getPrototypeOf(result), SharedArrayBuffer.prototype);
