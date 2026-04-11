

/*---
description: Statement cannot contain an `export` declaration
esid: sec-modules
negative:
  phase: parse
  type: SyntaxError
flags: [module]
features: [generators]
---*/

$DONOTEVALUATE();

function* g() { export default null; }
