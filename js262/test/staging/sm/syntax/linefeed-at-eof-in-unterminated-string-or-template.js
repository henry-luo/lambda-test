

/*---
description: |
  Properly handle the case of U+005C REVERSE SOLIDUS U+000D CARRIAGE RETURN at the end of source text being tokenized, in the middle of a string or template literal, where the next code point in memory (outside the bounds of the source text) is U+000A LINE FEED
info: bugzilla.mozilla.org/show_bug.cgi?id=1476409
esid: pending
---*/

function expectSyntaxError(code)
{
  assert.throws(SyntaxError, function() {
    eval(code);
  });
}


function singleQuote()
{
  var containsBadSingleQuoteLiteral =
    "\u1234x'01234567890123456789012345678901234567890123456789\\\r\n0123456789";
  

  expectSyntaxError(containsBadSingleQuoteLiteral.substr(2, 53));
}
singleQuote();

function doubleQuote()
{
  var containsBadDoubleQuoteLiteral =
    "\u1234x\"01234567890123456789012345678901234567890123456789\\\r\n0123456789";
  

  expectSyntaxError(containsBadDoubleQuoteLiteral.substr(2, 53));
}
doubleQuote();

function template()
{
  var containsBadTemplateLiteral =
    "\u1234x`01234567890123456789012345678901234567890123456789\\\r\n0123456789";
  

  expectSyntaxError(containsBadTemplateLiteral.substr(2, 53));
}
template();
