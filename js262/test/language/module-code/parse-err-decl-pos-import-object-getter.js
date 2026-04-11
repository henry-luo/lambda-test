

/*---
description: Expression cannot contain an `import` declaration
esid: sec-modules
negative:
  phase: parse
  type: SyntaxError
flags: [module]
---*/

$DONOTEVALUATE();

({ get m() { import v from './decl-pos-import-object-getter.js'; } });
