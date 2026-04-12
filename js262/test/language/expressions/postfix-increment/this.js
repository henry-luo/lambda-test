

/*---
esid: sec-update-expressions-static-semantics-early-errors
description: >
  It is an early Syntax Error if AssignmentTargetType of LeftHandSideExpression is not simple. (this)
info: |
  sec-static-semantics-assignmenttargettype

    PrimaryExpression: this 

    Return invalid.

  sec-update-expressions-static-semantics-early-errors

    UpdateExpression: LeftHandSideExpression ++

    It is an early Syntax Error if AssignmentTargetType of LeftHandSideExpression is not simple.
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

this++;
