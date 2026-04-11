

/*---
esid: sec-for-statement
description: >
    await using declarations with initialisers in statement positions:
    for (;;) Statement
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();
async function f() {
  for (;false;) await using x = null;
}
