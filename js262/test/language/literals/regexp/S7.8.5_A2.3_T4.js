

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
  A regular expression may not contain a <CR> as a SourceCharacter, evaluated
---*/


try {
   eval("/a\u000D/").source;
   throw new Test262Error('#1.1: RegularExpressionChar :: Carriage Retur is incorrect. Actual: ' + (eval("/a\u000D/").source));
}
catch (e) {
  if ((e instanceof SyntaxError) !== true) {
     throw new Test262Error('#1.2: RegularExpressionChar :: Carriage Retur is incorrect. Actual: ' + (e));
  }
}
