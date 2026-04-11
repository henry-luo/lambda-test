

/*---
description: Statement cannot contain an `export` declaration
esid: sec-modules
negative:
  phase: parse
  type: SyntaxError
flags: [module]
---*/

$DONOTEVALUATE();

for (var y in [])
  export default null;
