

/*---
esid: sec-declarative-environment-records-setmutablebinding-n-v-s
description: >
    using: invalid assignment in next expression.  Since a `using` declaration introduces an immutable
    binding, any attempt to change it results in a TypeError.
features: [explicit-resource-management]
---*/

assert.throws(TypeError, function() {
  for (using i = null; i === null; i = { [Symbol.dispose]() { } }) {}
});
