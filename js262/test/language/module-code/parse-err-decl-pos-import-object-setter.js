

/*---
description: Expression cannot contain an `import` declaration
esid: sec-modules
negative:
  phase: parse
  type: SyntaxError
flags: [module]
---*/

$DONOTEVALUATE();

({ set m(x) { import v from './decl-pos-import-object-setter.js'; } });
