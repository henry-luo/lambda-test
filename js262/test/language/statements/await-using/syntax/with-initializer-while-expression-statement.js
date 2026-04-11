

/*---
esid: sec-while-statement
description: >
    await using declarations with initialisers in statement positions:
    while ( Expression ) Statement
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();
async function f() {
  while (false) await using x = null;
}
