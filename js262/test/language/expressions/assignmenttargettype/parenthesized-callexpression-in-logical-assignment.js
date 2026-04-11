

/*---
description: Static Semantics AssignmentTargetType, Return web-compat. (ParenthesizedExpression)
esid: sec-grouping-operator-static-semantics-assignmenttargettype
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    ParenthesizedExpression: (Expression)

    Return AssignmentTargetType of Expression.

    CallExpression :
      CoverCallExpressionAndAsyncArrowHead
      CallExpression Arguments
    1. If the host is a web browser or otherwise supports Runtime Errors for Function Call Assignment Targets, then
       a. If IsStrict(this CallExpression) is false, return ~web-compat~.
    2. Return ~invalid~.

---*/

$DONOTEVALUATE();

(f()) &&= 1;
