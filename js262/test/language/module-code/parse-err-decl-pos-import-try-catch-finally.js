

/*---
description: Statement cannot contain an `import` declaration
esid: sec-modules
negative:
  phase: parse
  type: SyntaxError
flags: [module]
---*/

$DONOTEVALUATE();

try { } catch (err) { } finally {
  import v from './decl-pos-import-try-catch-finally.js';
}
