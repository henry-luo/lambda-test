

/*---
esid: sec-labelled-statements
description: >
    using declarations without initialisers in statement positions:
    label: Statement
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();
label: using x;
