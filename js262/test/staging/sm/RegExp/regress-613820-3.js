

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-RegExp-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

var re = /(?:^(a)|\1(a)|(ab)){2}/;
var str = 'aab';
var actual = re.exec(str);
var expected = makeExpectedMatch(['aa', undefined, 'a', undefined], 0, str);
checkRegExpMatch(actual, expected);

