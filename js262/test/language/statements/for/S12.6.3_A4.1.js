

/*---
info: |
    "in"-expression is not allowed as a ExpressionNoIn in "for
    (ExpressionNoIn; FirstExpression; SecondExpression) Statement"
    IterationStatement
es5id: 12.6.3_A4.1
description: Checking if execution of "for (var a in arr;1;){}" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

arr = [1,2,3,4,5];


for (var a in arr;1;){
    break;
}

