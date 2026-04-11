

/*---
description: Statement cannot contain an `import` declaration
esid: sec-modules
negative:
  phase: parse
  type: SyntaxError
flags: [module]
---*/

$DONOTEVALUATE();

switch(0) { default: import v from './decl-pos-import-switch-dftl.js'; }
