

/*---
description: Expression cannot contain an `import` declaration
esid: sec-modules
negative:
  phase: parse
  type: SyntaxError
flags: [module]
features: [generators]
---*/

$DONOTEVALUATE();

({ *m() { import v from './decl-pos-import-object-gen-method.js'; } });
