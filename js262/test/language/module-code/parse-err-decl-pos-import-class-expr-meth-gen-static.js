

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

(class { static *method() { import v from './decl-pos-import-class-expr-meth-gen-static.js'; } });
