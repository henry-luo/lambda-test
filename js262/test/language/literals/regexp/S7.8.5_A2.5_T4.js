

/*---
esid: prod-RegularExpressionBackslashSequence
info: |
  RegularExpressionBackslashSequence ::
    \ RegularExpressionNonTerminator

  RegularExpressionNonTerminator ::
    SourceCharacter but not LineTerminator

  LineTerminator ::
    <LF>
    <CR>
    <LS>
    <PS>

description: >
  A regular expression may not contain a <LF> as a SourceCharacter, evaluated
---*/


try {
   eval("/a\\\u000D/").source;
   throw new Test262Error('#1.1: RegularExpressionChar :: BackslashSequence :: \\Carriage Return is incorrect. Actual: ' + (eval("/a\\\u000D/").source));
}
catch (e) {
  if ((e instanceof SyntaxError) !== true) {
     throw new Test262Error('#1.2: RegularExpressionChar :: BackslashSequence :: \\Carriage Return is incorrect. Actual: ' + (e));
  }
}
