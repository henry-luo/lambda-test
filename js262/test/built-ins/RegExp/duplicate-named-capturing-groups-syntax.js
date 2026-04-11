

/*---
esid: sec-regexp-pattern-flags
description: Runtime parsing of syntax for duplicate named capturing groups
features: [regexp-duplicate-named-groups]
---*/

assert.throws(
  SyntaxError,
  () => new RegExp("(?<x>a)(?<x>b)"),
  "Duplicate named capturing groups in the same alternative do not parse"
);

let source = "(?<x>a)|(?<x>b)";
let parsed = new RegExp(source);
assert.sameValue(parsed.source, source, "Duplicate named capturing groups in separate alternatives parse correctly");
