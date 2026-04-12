

/*---
description: Expression not allowed in head's AssignmentExpression position
info: |
    IterationStatement :
        for ( LeftHandSideExpression of AssignmentExpression ) Statement
es6id: 13.7
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var x;
for (x of [], []) {}
