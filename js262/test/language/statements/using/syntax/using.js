

/*---
esid: sec-let-const-using-and-await-using-declarations
description: >
    module and block scope using
flags: [module]
features: [explicit-resource-management]
---*/

using z = null;


{
  using z = undefined;
}

assert.sameValue(z, null);

if (true) {
  const obj = { [Symbol.dispose]() { } };
  using z = obj;
  assert.sameValue(z, obj);
}
