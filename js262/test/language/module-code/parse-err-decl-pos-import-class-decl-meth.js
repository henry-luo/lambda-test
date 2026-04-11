

/*---
description: Statement cannot contain an `import` declaration
esid: sec-modules
negative:
  phase: parse
  type: SyntaxError
flags: [module]
---*/

$DONOTEVALUATE();

class C { method() { import v from './decl-pos-import-class-decl-meth.js'; } }
