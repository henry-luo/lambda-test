

/*---
description: Statement cannot contain an `import` declaration
esid: sec-modules
negative:
  phase: parse
  type: SyntaxError
flags: [module]
---*/

$DONOTEVALUATE();

for (const x = 0; false;)
  import v from './decl-pos-import-for-const.js';
