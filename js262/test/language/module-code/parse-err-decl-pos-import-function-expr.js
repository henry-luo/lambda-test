

/*---
description: Expression cannot contain an `import` declaration
esid: sec-modules
negative:
  phase: parse
  type: SyntaxError
flags: [module]
---*/

$DONOTEVALUATE();

(function() { import v from './decl-pos-import-function-expr.js'; });
