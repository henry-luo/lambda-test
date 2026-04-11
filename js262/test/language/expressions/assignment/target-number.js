

/*---
esid: sec-assignment-operators-static-semantics-early-errors
description: >
    simple assignment throws SyntaxError if LeftHandSide is not a
    reference (number)
info: |
    AssignmentExpression : LeftHandSideExpression = AssignmentExpression

    It is an early Syntax Error if LeftHandSideExpression is neither an
    ObjectLiteral nor an ArrayLiteral and AssignmentTargetType of
    LeftHandSideExpression is invalid or strict.
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

42 = 42;
