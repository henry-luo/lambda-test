

/*---
esid: sec-sharedarraybuffer-length
description: >
  The byteLength argument is validated before OrdinaryCreateFromConstructor.
info: |
  SharedArrayBuffer ( length [ , options ] )

  ...
  4. Return ? AllocateSharedArrayBuffer(NewTarget, byteLength, requestedMaxByteLength).

  AllocateSharedArrayBuffer ( constructor, byteLength [ , maxByteLength ] )

  ...
  3. If allocatingGrowableBuffer is true, then
    a. If byteLength > maxByteLength, throw a RangeError exception.
  ...
  5. Let obj be ? OrdinaryCreateFromConstructor(constructor, "%SharedArrayBuffer.prototype%", slots).
  ...

features: [SharedArrayBuffer, resizable-arraybuffer, Reflect.construct]
---*/

let newTarget = Object.defineProperty(function(){}.bind(null), "prototype", {
  get() {
    throw new Test262Error();
  }
});

assert.throws(RangeError, function() {
  let byteLength = 10;
  let options = {
    maxByteLength: 0,
  };

  
  Reflect.construct(SharedArrayBuffer, [byteLength, options], newTarget);
});
