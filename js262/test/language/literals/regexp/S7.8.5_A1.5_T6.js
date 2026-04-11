

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
  The first character of a regular expression may not be a <PS>, (\u2029), evaluated
---*/


try {
   eval("/\\\u2029/").source;
   throw new Test262Error('#1.1: RegularExpressionFirstChar :: BackslashSequence :: \\Paragraph separator is incorrect. Actual: ' + (eval("/\\\u2029/").source));
}
catch (e) {
  if ((e instanceof SyntaxError) !== true) {
     throw new Test262Error('#1.2: RegularExpressionFirstChar :: BackslashSequence :: \\Paragraph separator is incorrect. Actual: ' + (e));
  }
}
