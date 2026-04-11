

/*---
es6id: 13.1
description: >
    for declaration:
    disallow initialization assignment
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
for (let x = 3 in {}) { }

