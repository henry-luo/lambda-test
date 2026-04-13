

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-RegExp-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

var re = /(\2(a)){2}/;
var str = 'aaa';
var actual = re.exec(str);
var expected = makeExpectedMatch(['aa', 'a', 'a'], 0, str);
checkRegExpMatch(actual, expected);

