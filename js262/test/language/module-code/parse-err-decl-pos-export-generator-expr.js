

/*---
description: Expression cannot contain an `export` declaration
esid: sec-modules
negative:
  phase: parse
  type: SyntaxError
flags: [module]
---*/

$DONOTEVALUATE();

(function*() { export default null; });
