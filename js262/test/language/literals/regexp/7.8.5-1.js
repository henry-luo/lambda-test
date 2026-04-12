

/*---
esid: prod-RegularExpressionBackslashSequence
info: |
  RegularExpressionBackslashSequence ::
    \ RegularExpressionNonTerminator

  RegularExpressionNonTerminator ::
    SourceCharacter but not LineTerminator

    SyntaxError exception is thrown if the RegularExpressionNonTerminator position of a
    RegularExpressionBackslashSequence is a LineTerminator.
description: >
  A RegularExpressionBackslashSequence may not contain a LineTerminator.
---*/

assert.throws(SyntaxError, function() {
  eval("/\\\rn/;");


});
