

/*---
description: Out-of-range value of hexadecimal digits in UnicodeEscapeSequence
es6id: 21.2.1.1
info: |
    21.2.1.1 Static Semantics: Early Errors

    RegExpUnicodeEscapeSequence :: u{ HexDigits }

        - It is a Syntax Error if the MV of HexDigits > 1114111.
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

/\u{110000}/u;
