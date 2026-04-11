

/*---
description: Throws when an entry object is a primitive string.
esid: sec-object.fromentries
features: [Object.fromEntries]
---*/

assert.sameValue(typeof Object.fromEntries, 'function');
assert.throws(TypeError, function() {
  Object.fromEntries(['ab']);
});
