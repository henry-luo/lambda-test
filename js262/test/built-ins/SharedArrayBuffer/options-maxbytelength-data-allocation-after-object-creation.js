

/*---
esid: sec-sharedarraybuffer-length
description: >
  The new SharedArrayBuffer instance is created prior to allocating the Data Block.
info: |
  SharedArrayBuffer ( length [ , options ] )

  ...
  4. Return ? AllocateSharedArrayBuffer(NewTarget, byteLength, requestedMaxByteLength).

  AllocateSharedArrayBuffer( constructor, byteLength )

  ...
  5. Let obj be ? OrdinaryCreateFromConstructor(constructor, "%SharedArrayBuffer.prototype%", slots).
  ...
  7. Let block be ? CreateSharedByteDataBlock(allocLength).
  ...

features: [SharedArrayBuffer, resizable-arraybuffer, Reflect.construct]
---*/

function DummyError() {}

let newTarget = Object.defineProperty(function(){}.bind(null), "prototype", {
  get() {
    throw new DummyError();
  }
});

assert.throws(DummyError, function() {
  let byteLength = 0;
  let options = {
    maxByteLength: 7 * 1125899906842624
  };

  
  Reflect.construct(SharedArrayBuffer, [], newTarget);
});
