

/*---
esid: prod-OptionalExpression
description: >
  an optional expression cannot be target of assignment
info: |
  Static Semantics: IsValidSimpleAssignmentTarget
    LeftHandSideExpression:
      OptionalExpression
    Return false.
features: [optional-chaining]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

const obj = {};

obj?.a = 33;
