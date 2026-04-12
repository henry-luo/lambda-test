

/*---
esid: sec-properties-of-the-array-prototype-object
description: >
  Array.prototype has a length property
info: |
  22.1.3 Properties of the Array Prototype Object
  
  The Array prototype object is the intrinsic object %ArrayPrototype%. The Array
  prototype object is an Array exotic object and has the internal methods specified
  for such objects. It has a length property whose initial value is 0 and whose
  attributes are { [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]:
    false }.
includes: [propertyHelper.js]
---*/

assert.sameValue(Array.prototype.length, 0);

verifyNotEnumerable(Array.prototype, 'length');

verifyWritable(Array.prototype, 'length', false, 42);
verifyNotConfigurable(Array.prototype, 'length');
