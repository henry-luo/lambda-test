

/*---
info: |
    Line Terminator cannot be expressed as a Unicode escape sequence
    consisting of six characters, namely \u plus four hexadecimal digits
es5id: 7.3_A6_T1
description: Insert LINE FEED (U+000A) in var x
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var\u000Ax;
