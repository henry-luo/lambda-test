

/*---
es6id: 16.1
description: Invalid octal escape sequence
info: |
  TemplateCharacter ::
    $ [lookahead ≠ {]
    \ TemplateEscapeSequence
    \ NotEscapeSequence
    LineContinuation
    LineTerminatorSequence
    SourceCharacter but not one of ` or \ or $ or LineTerminator
  TemplateEscapeSequence ::
    CharacterEscapeSequence
    0 [lookahead ∉ DecimalDigit]
    HexEscapeSequence
    UnicodeEscapeSequence
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

`\00`;
