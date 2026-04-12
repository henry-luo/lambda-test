

/*---
esid: sec-literals-regular-expression-literals
info: |
  RegularExpressionBody ::
    RegularExpressionFirstChar RegularExpressionChars

  RegularExpressionChars ::
    [empty]
    RegularExpressionChars RegularExpressionChar

  RegularExpressionFirstChar ::
    RegularExpressionNonTerminator but not one of * or \ or / or [

description: >
  The first character of a regular expression may not be "\"
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

/\/
