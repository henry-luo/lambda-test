

/*---
esid: sec-literals-regular-expression-literals
info: |
  RegularExpressionChar ::
    RegularExpressionBackslashSequence


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
   eval("/a\u000A/").source;
   throw new Test262Error('#1.1: RegularExpressionChar :: Line Feedis incorrect. Actual: ' + (eval("/a\u000A/").source));
}
catch (e) {
  if ((e instanceof SyntaxError) !== true) {
     throw new Test262Error('#1.2: RegularExpressionChar :: Line Feed is incorrect. Actual: ' + (e));
  }
}
