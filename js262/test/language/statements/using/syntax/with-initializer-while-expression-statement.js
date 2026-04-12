

/*---
esid: sec-while-statement
description: >
    using declarations with initialisers in statement positions:
    while ( Expression ) Statement
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();
while (false) using x = null;
