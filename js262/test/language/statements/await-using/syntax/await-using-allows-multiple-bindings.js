

/*---
esid: sec-let-const-using-and-await-using-declarations
description: >
    'await using' allows multiple lexical bindings
features: [explicit-resource-management]
---*/

async function f() {
  await using x = null, y = null;
}
