

/*---
esid: sec-do-while-statement
description: >
    await using declarations without initialisers in statement positions:
    do Statement while ( Expression )
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();
async function f() {
  do await using x; while (false)
}
