

/*---
esid: prod-RegularExpressionFirstChar
info: |
  RegularExpressionChars ::
    [empty]
    RegularExpressionCharsRegularExpressionChar

  RegularExpressionFirstChar ::
    RegularExpressionNonTerminator but not one of * or \ or / or [

description: >
  The first character of a regular expression may not be "*"
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

