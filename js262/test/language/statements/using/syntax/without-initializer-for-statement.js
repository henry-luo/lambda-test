

/*---
esid: sec-for-statement
description: >
    using declarations without initialisers in statement positions:
    for ( ;;) Statement
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();
for (;false;) using x;
