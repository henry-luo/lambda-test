

/*---
esid: sec-white-space
description: >
  Mongolian Vowel Separator is not recognized as white space.
info: |
  11.2 White Space

  WhiteSpace ::
    <TAB>
    <VT>
    <FF>
    <SP>
    <NBSP>
    <ZWNBSP>
    <USP>
  <USP> ::
    Other category “Zs” code points

  General Category of U+180E is “Cf” (Format).
negative:
  phase: parse
  type: SyntaxError
features: [u180e]
---*/

$DONOTEVALUATE();


var᠎foo;
