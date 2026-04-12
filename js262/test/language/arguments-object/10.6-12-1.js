

/*---
es5id: 10.6-12-1
description: Accessing callee property of Arguments object is allowed
flags: [noStrict]
---*/

function testcase() {
    arguments.callee;
}
testcase();
