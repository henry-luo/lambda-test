

/*---
esid: sec-left-hand-side-expressions-static-semantics-early-errors
description: >
  An Syntax Error is thrown when the syntactic goal symbol is AsyncGeneratorBody or FormalParameters.
info: |
  It is an early Syntax Error if Module is not the syntactic goal symbol.
features: [import.meta, async-iteration]
---*/

var AsyncGenerator = async function*(){}.constructor;

assert.throws(SyntaxError, function() {
    AsyncGenerator("import.meta");
}, "import.meta in AsyncGeneratorBody");

assert.throws(SyntaxError, function() {
    AsyncGenerator("a = import.meta", "");
}, "import.meta in FormalParameters");
