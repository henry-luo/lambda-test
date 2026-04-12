

/*---
info: |
    RegularExpressionFirstChar :: BackslashSequence :: \NonTerminator,
    RegularExpressionChars :: [empty], RegularExpressionFlags :: [empty]
es5id: 7.8.5_A1.4_T1
es6id: 11.8.5
description: Check similar to (/\1/.source === "\\1")
---*/

assert.sameValue(/\1/.source, "\\1");
assert.sameValue(/\a/.source, "\\a");
