

/*---
esid: sec-variable-statement
description: arguments as local var identifier throws SyntaxError in strict mode
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var a, arguments = 42, b;
