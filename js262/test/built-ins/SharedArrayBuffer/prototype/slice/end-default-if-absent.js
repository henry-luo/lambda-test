

/*---
description: >
  The `end` index defaults to [[ArrayBufferByteLength]] if absent.
info: |
  SharedArrayBuffer.prototype.slice ( start, end )

features: [SharedArrayBuffer]
---*/

var arrayBuffer = new SharedArrayBuffer(8);

var start = 6;
var result = arrayBuffer.slice(start);
assert.sameValue(result.byteLength, 2);
