

/*---
esid: prod-RegularExpressionNonTerminator
info: |
  RegularExpressionLiteral ::
    / RegularExpressionBody / RegularExpressionFlags

    RegularExpressionBody ::
      RegularExpressionFirstChar RegularExpressionChars

    RegularExpressionChars ::
      [empty]
      RegularExpressionChars RegularExpressionChar

  RegularExpressionFirstChar ::
    RegularExpressionNonTerminator but not one of * or \ or / or [

  SourceCharacter ::
    any Unicode code point

  RegularExpressionNonTerminator::
    SourceCharacter but not LineTerminator

description: >
  RegularExpressionBody will never be empty, because RegularExpressionFirstChar must always be _something_. // is a comment.
---*/

var y = 42;
var x = 
y;

assert.sameValue(x, y);

