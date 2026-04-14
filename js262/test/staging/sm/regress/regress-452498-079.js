

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

var BUGNUMBER = 452498;
var summary = 'TM: upvar2 regression tests';
var actual = '';
var expect = '';


test();


function test()
{
  printBugNumber(BUGNUMBER);
  printStatus (summary);


  x; var x; function x() { return 0; }


  assert.sameValue(expect, actual, summary);
}
