

/*---
esid: sec-let-const-using-and-await-using-declarations
description: >
    await using: |await using let| split across two lines is treated as two statements.
info: |
  Lexical declarations may not declare a binding named "let".
flags: [noStrict, async]
includes: [asyncHelpers.js]
features: [explicit-resource-management]
---*/

asyncTest(async function () {
  await using
  let = "irrelevant initializer";

  assert(typeof let === "string");
  var using, let;
});
