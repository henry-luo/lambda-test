

/*---
esid: prod-RegularExpressionBackslashSequence
info: |
  RegularExpressionBackslashSequence ::
  \ RegularExpressionNonTerminator

  RegularExpressionNonTerminator ::
    SourceCharacter but not LineTerminator

description: >
  A RegularExpressionBackslashSequence may not contain a <LF>

negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

/\
/
