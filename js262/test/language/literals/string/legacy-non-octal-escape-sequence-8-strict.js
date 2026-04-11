

/*---
esid: sec-literals-string-literals
description: LegacyOctalEscapeSequence is not enabled in strict mode code - 8
info: |
  EscapeSequence ::
    CharacterEscapeSequence
    LegacyOctalEscapeSequence
    NonOctalDecimalEscapeSequence
    HexEscapeSequence
    UnicodeEscapeSequence

  NonOctalDecimalEscapeSequence :: one of
    8 9

  ## 12.8.4.1 Static Semantics: Early Errors

  EscapeSequence :: NonOctalDecimalEscapeSequence

  - It is a Syntax Error if the source code matching this production is strict
    mode code.
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

'\8';
