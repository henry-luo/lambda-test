

/*---
info: |
    RegularExpressionFirstChar :: NonTerminator but not * or \ or /,
    RegularExpressionChars :: [empty], RegularExpressionFlags :: [empty]
es5id: 7.8.5_A1.1_T1
description: Without eval
---*/


if (/1/.source !== "1") {
  throw new Test262Error('#1: /1/');
}


if (/a/.source !== "a") {
  throw new Test262Error('#2: /a/');
}


if (/;/.source !== ";") {
  throw new Test262Error('#3: /;/');
}


if (/ /.source !== " ") {
  throw new Test262Error('#4: / /');
}


if (/\u0041/.source !== "\\u0041") {
  throw new Test262Error('#5: /\\u0041/');
}
