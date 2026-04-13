

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-RegExp-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

var re = /(?:(f)(o)(o)|(b)(a)(r))*/;
var str = 'foobar';
var actual = re.exec(str);
var expected = makeExpectedMatch(['foobar', undefined, undefined, undefined, 'b', 'a', 'r'], 0, str);
checkRegExpMatch(actual, expected);

