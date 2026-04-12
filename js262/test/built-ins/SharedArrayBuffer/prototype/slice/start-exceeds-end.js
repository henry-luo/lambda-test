

/*---
description: >
  Returns zero-length buffer if `start` index exceeds `end` index.
info: |
  SharedArrayBuffer.prototype.slice ( start, end )

features: [SharedArrayBuffer]
---*/

var arrayBuffer = new SharedArrayBuffer(8);

var start = 5,
  end = 4;
var result = arrayBuffer.slice(start, end);
assert.sameValue(result.byteLength, 0);
