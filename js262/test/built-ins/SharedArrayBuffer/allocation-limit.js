

/*---
esid: sec-sharedarraybuffer-length
description: >
  Throws a RangeError if requested Data Block is too large.
info: |
  SharedArrayBuffer( length )

  ...
  3. Return AllocateSharedArrayBuffer(NewTarget, byteLength).

  6.2.7.2 CreateSharedByteDataBlock(size)
    ...
    2. Let db be a new Shared Data Block value consisting of size
       bytes. If it is impossible to create such a Shared Data Block,
       throw a RangeError exception.
    ...
features: [SharedArrayBuffer]
---*/

assert.throws(RangeError, function() {
  
  
  new SharedArrayBuffer(7 * 1125899906842624);
}, "`length` parameter is 7 PiB");

assert.throws(RangeError, function() {
  
  
  new SharedArrayBuffer(9007199254740992 - 1);
}, "`length` parameter is Math.pow(2, 53) - 1");
