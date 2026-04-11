

/*---
es5id: 10.6-6-4
description: >
    'length' property of arguments object for 0 argument function call
    is 0 even with formal parameters
---*/

function testcase(a,b,c) {
    assert.sameValue(arguments.length, 0);
}
testcase();
