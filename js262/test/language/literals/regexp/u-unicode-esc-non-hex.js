

/*---
description: >
    Non-hexadecimal value within the delimiters of a UnicodeEscapeSequence
es6id: 21.2.1
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

/\u{1,}/u;
