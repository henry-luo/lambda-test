

/*---
es5id: 10.4.2-2-c-1
description: >
    Direct val code in non-strict mode - can instantiate variable in
    calling context
flags: [noStrict]
---*/

function testcase() {
  var x = 0;
  function inner() {
     eval("var x = 1");
     assert.sameValue(x, 1, "x");
  }
  inner();
}
testcase();
