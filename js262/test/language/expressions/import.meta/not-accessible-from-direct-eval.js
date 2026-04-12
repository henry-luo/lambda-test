

/*---
esid: sec-left-hand-side-expressions-static-semantics-early-errors
description: >
  import.meta is not allowed in direct eval in module code.
info: |
  It is an early Syntax Error if Module is not the syntactic goal symbol.
flags: [module]
features: [import.meta]
---*/

assert.throws(SyntaxError, function() {
    eval("import.meta");
});
