

/*---
es5id: 12.2.1-1-s
esid: sec-variable-statement
description: >
    eval - a function declaring a var named 'eval' throws SyntaxError
    in strict mode
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var eval;
