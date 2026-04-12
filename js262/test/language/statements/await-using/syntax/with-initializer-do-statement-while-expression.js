

/*---
esid: sec-do-while-statement
description: >
    await using declarations with initialisers in statement positions:
    do Statement while ( Expression )
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();
async function f() {
  do await using x = 1; while (false)
}
