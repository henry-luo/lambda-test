

/*---
esid: sec-sharedarraybuffer-length
description: >
  Throws a RangeError if the requested Data Block is too large.
info: |
  SharedArrayBuffer ( length [ , options ] )

  ...
  4. Return ? AllocateSharedArrayBuffer(NewTarget, byteLength, requestedMaxByteLength).

  AllocateSharedArrayBuffer ( constructor, byteLength [ , maxByteLength ] )

  ...
  7. Let block be ? CreateSharedByteDataBlock(allocLength).
  ...

  CreateSharedByteDataBlock ( size )

  1. Let db be a new Shared Data Block value consisting of size bytes. If it is
     impossible to create such a Shared Data Block, throw a RangeError exception.

features: [SharedArrayBuffer, resizable-arraybuffer]
---*/

assert.throws(RangeError, function() {
  
  
  new SharedArrayBuffer(0, {maxByteLength: 7 * 1125899906842624});
}, "`maxByteLength` option is 7 PiB");

assert.throws(RangeError, function() {
  
  
  new SharedArrayBuffer(0, {maxByteLength: 9007199254740992 - 1});
}, "`maxByteLength` option is Math.pow(2, 53) - 1");
