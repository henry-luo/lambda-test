

/*---
info: |
    RegularExpressionChar :: NonTerminator but not \ or /,
    RegularExpressionFlags :: [empty]
es5id: 7.8.5_A2.1_T1
description: Without eval
---*/


if (/1a/.source !== "1a") {
  throw new Test262Error('#1: /1a/');
}   


if (/aa/.source !== "aa") {
  throw new Test262Error('#2: /aa/');
}


if (/,;/.source !== ",;") {
  throw new Test262Error('#3: /,;/');
}


if (/  /.source !== "  ") {
  throw new Test262Error('#4: /  /');
}      


if (/a\u0041/.source !== "a\\u0041") {
  throw new Test262Error('#5: /a\\u0041/');
}
