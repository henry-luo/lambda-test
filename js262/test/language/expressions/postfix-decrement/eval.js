

/*---
esid: sec-update-expressions
description: >
  It is an early Syntax Error if AssignmentTargetType of LeftHandSideExpression is strict. (eval)
info: |
  sec-identifiers-static-semantics-assignmenttargettype

    If this IdentifierReference is contained in strict mode code and StringValue of Identifier is "eval" or  "arguments", return strict.

  sec-update-expressions-static-semantics-early-errors

    UpdateExpression: LeftHandSideExpression --

    It is an early Syntax Error if AssignmentTargetType of LeftHandSideExpression is strict.
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

eval--;
