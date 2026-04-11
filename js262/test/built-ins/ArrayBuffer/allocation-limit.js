

/*---
esid: sec-arraybuffer-length
description: >
  Throws a RangeError if requested Data Block is too large.
info: |
  ArrayBuffer( length )

  ...
  6. Return AllocateArrayBuffer(NewTarget, byteLength).

  6.2.6.1 CreateByteDataBlock(size)
    ...
    2. Let db be a new Data Block value consisting of size bytes. If it is
       impossible to create such a Data Block, throw a RangeError exception.
    ...
---*/

assert.throws(RangeError, function() {
  
  
  new ArrayBuffer(7 * 1125899906842624);
}, "`length` parameter is 7 PiB");

assert.throws(RangeError, function() {
  
  
  new ArrayBuffer(9007199254740992 - 1);
}, "`length` parameter is Math.pow(2, 53) - 1");
