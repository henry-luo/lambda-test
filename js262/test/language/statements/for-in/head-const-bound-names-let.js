

/*---
description: The declaration may not contain a binding for `let`
negative:
  phase: parse
  type: SyntaxError
info: |
    It is a Syntax Error if the BoundNames of ForDeclaration contains "let".
esid: sec-for-in-and-for-of-statements
es6id: 13.7.5
flags: [noStrict]
---*/

$DONOTEVALUATE();

for (const let in {}) {}
