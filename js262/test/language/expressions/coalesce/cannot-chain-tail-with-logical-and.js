

/*---
description: >
    If the CoalesceExpressionHead is undefined or null, follow return the right-side value.
    Otherwise, return the left-side value.
esid: sec-conditional-operator
info: |
    ConditionalExpression :
        ShortCircuitExpression
        ShortCircuitExpression ? AssignmentExpression : AssignmentExpression

    ShortCircuitExpression :
        LogicalORExpression
        CoalesceExpression

    CoalesceExpression :
        CoalesceExpressionHead ?? BitwiseORExpression

    CoalesceExpressionHead :
        CoalesceExpression
        BitwiseORExpression
features: [coalesce-expression]
negative:
    phase: parse
    type: SyntaxError
---*/

$DONOTEVALUATE();

0 ?? 0 && true;
