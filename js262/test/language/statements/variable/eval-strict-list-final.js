

/*---
es5id: 12.2.1-26-s
esid: sec-variable-statement
description: eval as local var identifier throws SyntaxError in strict mode
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var a, eval;
