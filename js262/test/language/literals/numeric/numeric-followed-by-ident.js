

/*---
esid: sec-literals-numeric-literals
description: >
  NumericLiteral followed by IdentifierStart
info: |
  The source character immediately following a NumericLiteral must not be an IdentifierStart or DecimalDigit.

negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

3in []
