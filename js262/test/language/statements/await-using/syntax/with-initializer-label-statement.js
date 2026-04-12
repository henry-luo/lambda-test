

/*---
esid: sec-labelled-statements
description: >
    await using declarations with initialisers in statement positions:
    label: Statement
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();
async function f() {
  label: await using x = null;
}
