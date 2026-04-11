

/*---
esid: sec-do-while-statement
description: >
    using declarations without initialisers in statement positions:
    do Statement while ( Expression )
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();
do using x; while (false)
