

/*---
es5id: 10.6-13-c-2-s
description: arguments.callee is exists
---*/

function testcase() {
  var desc = Object.getOwnPropertyDescriptor(arguments,"callee");
  assert.notSameValue(desc, undefined);
}
testcase();
