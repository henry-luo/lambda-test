

/*---
esid: sec-let-const-using-and-await-using-declarations
description: >
    module and block scope await using
flags: [module]
features: [explicit-resource-management]
---*/

await using z = null;


{
  await using z = undefined;
}

assert.sameValue(z, null);

if (true) {
  const obj = { [Symbol.dispose]() { } };
  await using z = obj;
  assert.sameValue(z, obj);
}

