

/*---
esid: sec-declarative-environment-records-setmutablebinding-n-v-s
description: >
    using: invalid assignment in Statement body. Since a `using` declaration introduces an immutable
    binding, any attempt to change it results in a TypeError.
features: [explicit-resource-management]
---*/

assert.throws(TypeError, function() {
  for (using x of [null]) { x = { [Symbol.dispose]() { } }; }
});
