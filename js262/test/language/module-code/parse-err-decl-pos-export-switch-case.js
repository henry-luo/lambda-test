

/*---
description: Statement cannot contain an `export` declaration
esid: sec-modules
negative:
  phase: parse
  type: SyntaxError
flags: [module]
---*/

$DONOTEVALUATE();

switch(0) { case 1: export default null; }
