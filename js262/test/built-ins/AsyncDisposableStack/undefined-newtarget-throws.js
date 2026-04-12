

/*---
esid: sec-asyncdisposablestack
description: >
  Throws a TypeError if NewTarget is undefined.
info: |
  AsyncDisposableStack ( )

  1. If NewTarget is undefined, throw a TypeError exception.
  ...
features: [explicit-resource-management]
---*/

assert.throws(TypeError, function() {
  AsyncDisposableStack();
});
