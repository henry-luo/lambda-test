

/*---
esid: sec-labelled-statements
description: >
    using declarations with initialisers in statement positions:
    label: Statement
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();
label: using x = null;
