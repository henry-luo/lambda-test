

/*---
description: Expression cannot contain an `import` declaration
esid: sec-modules
negative:
  phase: parse
  type: SyntaxError
flags: [module]
---*/

$DONOTEVALUATE();

(class { static method() { import v from './decl-pos-import-class-expr-meth-static.js'; } });
