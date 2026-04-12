

/*---
esid: sec-for-in-and-for-of-statements
description: >
    using: not allowed in for..in
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();
for (using x in [1, 2, 3]) { }
