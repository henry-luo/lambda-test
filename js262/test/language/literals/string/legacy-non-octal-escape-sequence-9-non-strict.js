

/*---
esid: sec-literals-string-literals
description: LegacyOctalEscapeSequence is not available in non-strict code - 9
info: |
    EscapeSequence ::
      CharacterEscapeSequence
      LegacyOctalEscapeSequence
      NonOctalDecimalEscapeSequence
      HexEscapeSequence
      UnicodeEscapeSequence

    NonOctalDecimalEscapeSequence :: one of
      8 9
flags: [noStrict]
---*/

assert.sameValue('\9', '9');
