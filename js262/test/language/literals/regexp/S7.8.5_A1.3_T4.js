

/*---
esid: prod-RegularExpressionNonTerminator
info: |
  RegularExpressionBody ::
    RegularExpressionFirstChar RegularExpressionChars

  RegularExpressionChars ::
    [empty]
    RegularExpressionChars RegularExpressionChar

  RegularExpressionFirstChar ::
    RegularExpressionNonTerminator but not one of * or \ or / or [

  RegularExpressionNonTerminator ::
    SourceCharacter but not LineTerminator

description: >
  The first character of a regular expression may not be a <CR>, (\u000D), evaluated
---*/


try {
   eval("/\u000D/").source;
   throw new Test262Error('#1.1: RegularExpressionFirstChar :: Carriage Return is incorrect. Actual: ' + (eval("/\u000D/").source));
}
catch (e) {
  if ((e instanceof SyntaxError) !== true) {
     throw new Test262Error('#1.2: RegularExpressionFirstChar :: Carriage Return is incorrect. Actual: ' + (e));
  }
}
