

/*---
esid: sec-sharedarraybuffer-length
description: >
  The new SharedArrayBuffer instance is created prior to allocating the Data Block.
info: |
  SharedArrayBuffer( length )

  ...
  3. Return AllocateSharedArrayBuffer(NewTarget, byteLength).

  AllocateSharedArrayBuffer( constructor, byteLength )
    1. Let obj be ? OrdinaryCreateFromConstructor(constructor, "%SharedArrayBufferPrototype%",
       «[[ArrayBufferData]], [[ArrayBufferByteLength]]» ).
    ...
    3. Let block be ? CreateByteDataBlock(byteLength).
    ...
features: [SharedArrayBuffer, Reflect.construct]
---*/

function DummyError() {}

var newTarget = function() {}.bind(null);
Object.defineProperty(newTarget, "prototype", {
  get: function() {
    throw new DummyError();
  }
});

assert.throws(DummyError, function() {
  
  
  Reflect.construct(SharedArrayBuffer, [7 * 1125899906842624], newTarget);
});
