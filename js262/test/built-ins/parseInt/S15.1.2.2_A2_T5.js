

/*---
info: Operator remove leading StrWhiteSpaceChar
esid: sec-parseint-string-radix
description: "StrWhiteSpaceChar :: VT (U+000B)"
---*/

assert.sameValue(parseInt("\u000B1"), parseInt("1"), 'parseInt("\\u000B1") must return the same value returned by parseInt("1")');
assert.sameValue(parseInt("\u000B\u000B-1"), parseInt("-1"), 'parseInt("\\u000B\\u000B-1") must return the same value returned by parseInt("-1")');


assert.sameValue(parseInt("\u000B"), NaN, 'parseInt("\\u000B") must return NaN');
