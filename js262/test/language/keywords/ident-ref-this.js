

/*---
esid: sec-identifiers-static-semantics-early-errors
es5id: 7.6.1.1_A1.18
description: Checking if execution of "this=1" fails
info: |
  Identifier : IdentifierName but not ReservedWord

  It is a Syntax Error if StringValue of IdentifierName is the same String
  value as the StringValue of any ReservedWord except for yield.
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


({this});
