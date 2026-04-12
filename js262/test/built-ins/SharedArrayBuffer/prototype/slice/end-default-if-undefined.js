

/*---
description: >
  The `end` index defaults to [[ArrayBufferByteLength]] if undefined.
info: |
  SharedArrayBuffer.prototype.slice ( start, end )

features: [SharedArrayBuffer]
---*/

var arrayBuffer = new SharedArrayBuffer(8);

var start = 6,
  end = undefined;
var result = arrayBuffer.slice(start, end);
assert.sameValue(result.byteLength, 2);
