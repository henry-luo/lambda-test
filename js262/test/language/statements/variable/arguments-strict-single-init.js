

/*---
es5id: 12.2.1-23-s
esid: sec-variable-statement
description: >
    arguments as local var identifier assigned to throws SyntaxError
    in strict mode
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var arguments = 42;
