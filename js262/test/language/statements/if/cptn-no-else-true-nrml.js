

/*---
es6id: 13.6.7
description: >
    Completion value when expression is true without an `else` clause and body
    returns a normal completion.
info: |
    IfStatement : if ( Expression ) Statement

    [...]
    4. If exprValue is false, then
       [...]
    5. Else,
       a. Let stmtCompletion be the result of evaluating Statement.
       b. ReturnIfAbrupt(stmtCompletion).
       c. If stmtCompletion.[[value]] is not empty, return stmtCompletion.
       d. Return NormalCompletion(undefined).
---*/

assert.sameValue(eval('1; if (true) { }'), undefined);
assert.sameValue(eval('2; if (true) { 3; }'), 3);
