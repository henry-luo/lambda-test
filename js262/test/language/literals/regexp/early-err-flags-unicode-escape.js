

/*---
esid: sec-literals-regular-expression-literals-static-semantics-early-errors
info: |
  RegularExpressionFlags ::
    RegularExpressionFlags IdentifierPart

description: >
  It is a Syntax Error if IdentifierPart contains a Unicode escape sequence.
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

/./\u0067;
