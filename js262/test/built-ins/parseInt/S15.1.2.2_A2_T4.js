

/*---
info: Operator remove leading StrWhiteSpaceChar
esid: sec-parseint-string-radix
description: "StrWhiteSpaceChar :: FF (U+000C)"
---*/

assert.sameValue(parseInt("\u000C1"), parseInt("1"), 'parseInt("\\u000C1") must return the same value returned by parseInt("1")');
assert.sameValue(parseInt("\u000C\u000C-1"), parseInt("-1"), 'parseInt("\\u000C\\u000C-1") must return the same value returned by parseInt("-1")');


assert.sameValue(parseInt("\u000C"), NaN, 'parseInt("\\u000C") must return NaN');
