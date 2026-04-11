

/*---
description: >
    `yield` is a reserved identifier in strict mode code and may not be used
    as a label.
es6id: 12.1.1
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

yield: 1;
