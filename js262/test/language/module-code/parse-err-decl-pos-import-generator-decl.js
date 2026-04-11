

/*---
description: Statement cannot contain an `import` declaration
esid: sec-modules
negative:
  phase: parse
  type: SyntaxError
flags: [module]
features: [generators]
---*/

$DONOTEVALUATE();

function* g() { import v from './decl-pos-import-generator-decl.js'; }
