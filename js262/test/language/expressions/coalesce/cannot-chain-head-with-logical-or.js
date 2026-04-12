

/*---
description: >
    Cannot immediately contain, or be contained within, an && or || operation.
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

0 || 0 ?? true;
