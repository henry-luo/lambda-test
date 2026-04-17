

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

var BUGNUMBER = 470758;
var summary = 'Do not crash with eval upvars';
var actual = '';
var expect = '';


test();


function test()
{
  printBugNumber(BUGNUMBER);
  printStatus (summary);
 
  (function() { var k; eval("for (var k in {});") })()

  assert.sameValue(expect, actual, summary);
}
