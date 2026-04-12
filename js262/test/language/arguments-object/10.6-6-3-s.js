

/*---
es5id: 10.6-6-3
description: >
    'length' property of arguments object for 0 argument function
    exists
---*/

function testcase() {
  assert.sameValue(arguments.length, 0);
}
testcase();
