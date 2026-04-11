

/*---
esid: sec-do-while-statement
description: >
    using declarations with initialisers in statement positions:
    do Statement while ( Expression )
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();
do using x = 1; while (false)
