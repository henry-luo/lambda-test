

/*---
description: Module code is always strict mode code.
es6id: 10.2.1
esid: sec-strict-mode-code
flags: [module]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var public;
