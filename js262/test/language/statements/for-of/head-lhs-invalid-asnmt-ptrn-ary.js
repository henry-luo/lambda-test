

/*---
description: Invalid destructuring assignment pattern (array literal)
info: |
    It is a Syntax Error if LeftHandSideExpression is either an ObjectLiteral
    or an ArrayLiteral and if the lexical token sequence matched by
    LeftHandSideExpression cannot be parsed with no tokens left over using
    AssignmentPattern as the goal symbol.
esid: sec-for-in-and-for-of-statements-static-semantics-early-errors
es6id: 13.7.5
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

for ([(x, y)] of []) {}
