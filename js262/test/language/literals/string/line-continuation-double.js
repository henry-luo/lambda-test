

/*---
esid: sec-literals-string-literals
description: >
  Line terminators may occur within string literals as part of a |LineContinuation|
  to produce the empty code points sequence.
info: |
  11.8.4 String Literals

  StringLiteral ::
    `"` DoubleStringCharacters? `"`
    `'` SingleStringCharacters? `'`

  DoubleStringCharacters ::
    DoubleStringCharacter DoubleStringCharacters?

  DoubleStringCharacter ::
    SourceCharacter but not one of `"` or `\` or LineTerminator
    <LS>
    <PS>
    `\` EscapeSequence
    LineContinuation

  LineContinuation ::
    `\` LineTerminatorSequence

  11.3 Line Terminators

  LineTerminatorSequence ::
    <LF>
    <CR> [lookahead != <LF>]
    <LS>
    <PS>
    <CR> <LF>

  11.8.4.2 Static Semantics: SV

  The SV of DoubleStringCharacter :: LineContinuation is the empty code unit sequence.
---*/


assert.sameValue("\
", "");


assert.sameValue("\
", "");


assert.sameValue("\ ", "");


assert.sameValue("\ ", "");


assert.sameValue("\
", "");
