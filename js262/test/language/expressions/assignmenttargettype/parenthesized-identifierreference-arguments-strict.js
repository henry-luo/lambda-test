

/*---
description: If this IdentifierReference is contained in strict mode code and StringValue of Identifier is "eval" or "arguments", return invalid. (ParenthesizedExpression)
esid: sec-grouping-operator-static-semantics-assignmenttargettype
flags: [generated, onlyStrict]
negative:
  phase: parse
  type: SyntaxError
info: |
    ParenthesizedExpression: (Expression)

    Return AssignmentTargetType of Expression.
---*/

$DONOTEVALUATE();

(arguments) = 1;
