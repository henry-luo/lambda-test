

/*---
description: Expression cannot contain an `export` declaration
esid: sec-modules
negative:
  phase: parse
  type: SyntaxError
flags: [module]
features: [generators]
---*/

$DONOTEVALUATE();

(class { *method() { export default null; } });
