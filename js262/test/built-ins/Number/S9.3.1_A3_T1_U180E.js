

/*---
esid: sec-tonumber-applied-to-the-string-type
description: >
  Ensure U+180E is not recognized as whitespace, test ToNumber with static string
info: |
  7.1.3.1 ToNumber Applied to the String Type

  If the grammar cannot interpret the String as an expansion of
  StringNumericLiteral, then the result of ToNumber is NaN.

  StringNumericLiteral :::
    StrWhiteSpace_opt StrNumericLiteral StrWhiteSpace_opt
  StrWhiteSpace :::
    StrWhiteSpaceChar StrWhiteSpace_opt
  StrWhiteSpaceChar :::
    WhiteSpace
    LineTerminator
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
features: [u180e]
---*/


assert.sameValue(Number('\u180E'), NaN, 'Number("\\u180E") === NaN');


assert.sameValue(Number('\u180E1234567890\u180E'), NaN, 'Number("\u180E1234567890\u180E") === NaN');


assert.sameValue(Number('\u180EInfinity\u180E'), NaN, 'Number("\u180EInfinity\u180E") === NaN');


assert.sameValue(Number('\u180E-Infinity\u180E'), NaN, 'Number("\u180E-Infinity\u180E") === NaN');
