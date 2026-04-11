

/*---
esid: sec-let-const-using-and-await-using-declarations
description: >
    using: |using let| split across two lines is treated as two statements.
info: |
  Lexical declarations may not declare a binding named "let".
flags: [noStrict]
features: [explicit-resource-management]
---*/

{
  using
  let = "irrelevant initializer";

  assert(typeof let === "string");
  var using, let;
}
