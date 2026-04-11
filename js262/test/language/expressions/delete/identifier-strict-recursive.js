

/*---
esid: sec-delete-operator-static-semantics-early-errors
description: Parsing error when operand is an IdentifierReference
info: |
  It is a Syntax Error if the UnaryExpression is contained in strict mode code
  and the derived UnaryExpression is PrimaryExpression:IdentifierReference.
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

delete ((identifier));
