

/*---
esid: sec-for-in-and-for-of-statements
description: ForDeclaration containing 'await using' may not contain a binding for `let`
negative:
  phase: parse
  type: SyntaxError
info: |
  It is a Syntax Error if the BoundNames of ForDeclaration contains "let".
flags: [noStrict]
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();
async function f() {
  for (await using let of []) {}
}
