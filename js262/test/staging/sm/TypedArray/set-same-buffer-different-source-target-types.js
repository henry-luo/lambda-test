

/*---
description: |
  When setting a typed array from an overlapping typed array of different element type, copy the source elements into properly-sized temporary memory, and properly copy them into the target without overflow (of either source *or* target) when finished
info: bugzilla.mozilla.org/show_bug.cgi?id=896116
esid: pending
---*/


var srclen = 65536;

var ta = new Uint8Array(srclen * Float64Array.BYTES_PER_ELEMENT);
var ta2 = new Float64Array(ta.buffer, 0, srclen);
ta.set(ta2);


for (var i = 0, len = ta.length; i < len; i++)
  assert.sameValue(ta[i], 0, "zero-bits double should convert to zero");
