

/*---
description: Expression not allowed in head's AssignmentExpression position
info: |
    IterationStatement :
        for ( ForDeclaration of AssignmentExpression ) Statement
es6id: 13.7
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

for (let x of [], []) {}
