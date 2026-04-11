

/*---
es5id: 12.2.1-27-s
esid: sec-variable-statement
description: >
    eval as local var identifier assigned to throws SyntaxError in
    strict mode
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var eval = 42, a;
