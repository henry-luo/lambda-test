

/*---
esid: sec-let-const-using-and-await-using-declarations
description: >
    'await using' allows BindingIdentifier in lexical bindings
flags: [async]
includes: [asyncHelpers.js]
features: [explicit-resource-management]
---*/
asyncTest(async function () {
  await using x = null;
});
