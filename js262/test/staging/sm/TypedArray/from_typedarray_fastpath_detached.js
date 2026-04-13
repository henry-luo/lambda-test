

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-TypedArray-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


var ta = new Int32Array(4);
$262.detachArrayBuffer(ta.buffer);

assertThrowsInstanceOf(() => Int32Array.from(ta), TypeError);

