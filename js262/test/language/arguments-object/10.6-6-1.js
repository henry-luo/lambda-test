

/*---
es5id: 10.6-6-1
description: "'length property of arguments object exists"
---*/

function testcase() {
  var desc = Object.getOwnPropertyDescriptor(arguments,"length");
  assert.notSameValue(desc, undefined);
}
testcase();
