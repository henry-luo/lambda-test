

/*---
esid: sec-update-expressions-static-semantics-early-errors
description: Applied to a "covered" YieldExpression
info: |
  UpdateExpression :
    LeftHandSideExpression ++
    LeftHandSideExpression --

  - It is an early Syntax Error if AssignmentTargetType of
    LeftHandSideExpression is invalid or strict.

  12.15.3 Static Semantics: AssignmentTargetType

  AssignmentExpression:
    YieldExpression
    ArrowFunction
    AsyncArrowFunction
    LeftHandSideExpression = AssignmentExpression
    LeftHandSideExpression AssignmentOperator AssignmentExpression

  1. Return invalid.
features: [generators]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function* g() {
  (yield)++;
}
