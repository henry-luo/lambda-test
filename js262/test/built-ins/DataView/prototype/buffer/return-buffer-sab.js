

/*---
esid: sec-get-dataview.prototype.buffer
description: >
  Return buffer from [[ViewedArrayBuffer]] internal slot
info: |
  24.2.4.1 get DataView.prototype.buffer

  ...
  5. Let buffer be the value of O's [[ViewedArrayBuffer]] internal slot.
  6. Return buffer.
features: [SharedArrayBuffer]
---*/

var buffer = new SharedArrayBuffer(1);
var dv = new DataView(buffer, 0);

assert.sameValue(dv.buffer, buffer);
