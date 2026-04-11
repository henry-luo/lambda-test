

/*---
info: |
    If neither Result(2) nor any prefix of Result(2) satisfies the syntax of a
    StrDecimalLiteral (see 9.3.1), return NaN
esid: sec-parsefloat-string
description: parseFloat("some string") return NaN
---*/

assert.sameValue(parseFloat("str"), NaN, "str");
assert.sameValue(parseFloat("s1"), NaN, "s1");
assert.sameValue(parseFloat(""), NaN, "");
assert.sameValue(parseFloat("+"), NaN, "+");
