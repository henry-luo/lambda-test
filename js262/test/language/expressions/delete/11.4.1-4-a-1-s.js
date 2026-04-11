

/*---
esid: sec-delete-operator-runtime-semantics-evaluation
description: >
    Strict Mode - TypeError is thrown when deleting non-configurable
    data property
flags: [onlyStrict]
---*/

var obj = {};
Object.defineProperty(obj, 'prop', {
  value: 'abc',
  configurable: false,
});
assert.throws(TypeError, function() {
  delete obj.prop;
});
assert.sameValue(obj.prop, 'abc', 'obj.prop');
