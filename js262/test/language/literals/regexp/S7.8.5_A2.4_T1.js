

/*---
info: |
    RegularExpressionChar :: BackslashSequence :: \NonTerminator,
    RegularExpressionFlags :: [empty]
es5id: 7.8.5_A2.4_T1
description: Check similar to (/,\;/.source === ",\\;")
---*/


if (/,\;/.source !== ",\\;") {
  throw new Test262Error('#1: /,\\;/');
}


if (/ \ /.source !== " \\ ") {
  throw new Test262Error('#2: / \\ /');
}
