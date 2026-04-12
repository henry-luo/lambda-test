

/*---
esid: sec-assignment-operators-static-semantics-early-errors
description: Applied to a "covered" new.target
info: |
  AssignmentExpression : LeftHandSideExpression = AssignmentExpression

  - It is an early Syntax Error if LeftHandSideExpression is neither an
    ObjectLiteral nor an ArrayLiteral and AssignmentTargetType of
    LeftHandSideExpression is invalid or strict.

  12.3.1.6 Static Semantics: AssignmentTargetType

  NewTarget:

  new.target

  1. Return invalid.
negative:
  phase: parse
  type: SyntaxError
features: [new.target]
---*/

$DONOTEVALUATE();

function f() {
  (new.target) = 1;
}
