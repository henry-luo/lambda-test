

/*---
esid: sec-for-in-and-for-of-statements
description: >
    await using: not allowed in for..in
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();
async function f() {
  for (await using x in [1, 2, 3]) { }
}
