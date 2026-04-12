

/*---
esid: prod-OptionalExpression
description: >
  optional chaining is forbidden in write contexts
info: |
  UpdateExpression[Yield, Await]:
    LeftHandSideExpression++
    LeftHandSideExpression--
    ++UnaryExpression
    --UnaryExpression
features: [optional-chaining]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


const a = {};
--a?.b;
