

/*---
es6id: 13.7.3.6
description: >
    Completion value when no iteration occurs
info: |
    IterationStatement : while ( Expression ) Statement

    1. Let V = undefined.
    2. Repeat
       a. Let exprRef be the result of evaluating Expression.
       b. Let exprValue be GetValue(exprRef).
       c. ReturnIfAbrupt(exprValue).
       d. If ToBoolean(exprValue) is false, return NormalCompletion(V).
---*/

assert.sameValue(eval('1; while (false) { }'), undefined);
assert.sameValue(eval('2; while (false) { 3; }'), undefined);
