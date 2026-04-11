

/*---
esid: sec-generator-function-definitions
es6id: 14.4
description: A YieldExpression is not a valid LeftHandSideExpression
info: |
  AssignmentExpression[In, Yield] :
    ConditionalExpression[?In, ?Yield]
    [+Yield]YieldExpression[?In]
    ArrowFunction[?In, ?Yield]
    LeftHandSideExpression[?Yield] = AssignmentExpression[?In, ?Yield]
    LeftHandSideExpression[?Yield] AssignmentOperator AssignmentExpression[?In, ?Yield]

  LeftHandSideExpression[Yield] :
    NewExpression[?Yield]
    CallExpression[?Yield]
features: [generators]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function* g() {
  yield = 1;
}
