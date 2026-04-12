

/*---
description: The body may not re-declare variables declared in the head
negative:
  phase: parse
  type: SyntaxError
info: |
    It is a Syntax Error if any element of the BoundNames of ForDeclaration
    also occurs in the VarDeclaredNames of Statement.
esid: sec-for-in-and-for-of-statements-static-semantics-early-errors
es6id: 13.7.5
---*/

$DONOTEVALUATE();

for (let x in {}) {
  var x;
}
