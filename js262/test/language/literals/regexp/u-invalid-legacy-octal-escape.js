

/*---
esid: sec-patterns
es6id: 21.2.1
description: Legacy Octal Escape Sequence not supported with `u` flag
info: |
    The `u` flag precludes the use of LegacyOctalEscapeSequence irrespective
    of the presence of Annex B extensions.

    CharacterEscape [U] ::
        ControlEscape
        c ControlLetter
        0[lookahead ∉ DecimalDigit]
        HexEscapeSequence
        RegExpUnicodeEscapeSequence[?U]
        IdentityEscape[?U]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

/\1/u;
