

/*---
description: Statement cannot contain an `import` declaration
esid: sec-modules
negative:
  phase: parse
  type: SyntaxError
flags: [module]
---*/

$DONOTEVALUATE();

try { } finally {
  import v from './decl-pos-import-try-finally.js';
}
