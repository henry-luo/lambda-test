

/*---
es5id: 12.2.1-31-s
esid: sec-variable-statement
description: >
    eval as local var identifier defined twice throws SyntaxError in
    strict mode
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var eval, eval;
