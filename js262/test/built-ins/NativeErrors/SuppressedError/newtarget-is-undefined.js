

/*---
esid: sec-suppressederror-constructor
description: >
  NewTarget is undefined
info: |
  SuppressedError ( error, suppressed, message )

  1. If NewTarget is undefined, let newTarget be the active function object, else let newTarget be NewTarget.

features: [explicit-resource-management]
---*/

var obj = SuppressedError();

assert.sameValue(Object.getPrototypeOf(obj), SuppressedError.prototype);
assert(obj instanceof SuppressedError);
