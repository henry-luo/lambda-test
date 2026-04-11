

/*---
esid: sec-conditional-operator
es6id: 12.13
description: >
  The second AssignmentExpression cannot include the `in` keyword in contexts
  where it is disallowed.
info: |
  Syntax

  ConditionalExpression[In, Yield] :
    LogicalORExpression[?In, ?Yield]
    LogicalORExpression[?In, ?Yield] ? AssignmentExpression[+In, ?Yield] : AssignmentExpression[?In, ?Yield]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

for (true ? 0 : 0 in {}; false; ) ;
