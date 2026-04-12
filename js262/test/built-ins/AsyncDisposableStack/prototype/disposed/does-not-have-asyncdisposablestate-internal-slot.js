

/*---
esid: sec-get-asyncdisposablestack.prototype.disposed
description: >
  Throws a TypeError if `this` object does not have a [[AsyncDisposableState]] internal slot.
info: |
  get AsyncDisposableStack.prototype.disposed

  1. Let asyncDisposableStack be the this value.
  2. Perform ? RequireInternalSlot(asyncDisposableStack, [[AsyncDisposableState]]).
  ...

  RequireInternalSlot ( O, internalSlot )

  1. If O is not an Object, throw a TypeError exception.
  2. If O does not have an internalSlot internal slot, throw a TypeError exception.
  ...

features: [explicit-resource-management]
---*/

var descriptor = Object.getOwnPropertyDescriptor(AsyncDisposableStack.prototype, 'disposed');

var stack = new AsyncDisposableStack();


descriptor.get.call(stack);

assert.throws(TypeError, function() {
  descriptor.get.call([]);
});
