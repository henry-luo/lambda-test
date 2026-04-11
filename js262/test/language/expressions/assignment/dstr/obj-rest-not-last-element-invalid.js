

/*---
description: Object rest element needs to be the last AssignmenProperty in ObjectAssignmentPattern. (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
features: [object-rest, destructuring-binding]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.
---*/
$DONOTEVALUATE();
var rest, b;

0, {...rest, b} = {}
;
