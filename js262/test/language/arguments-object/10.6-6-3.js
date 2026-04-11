

/*---
es5id: 10.6-6-3
description: >
    'length' property of arguments object for 0 argument function
    exists
flags: [noStrict]
---*/

function testcase() {
    var arguments= undefined;
    (function () { assert.sameValue(arguments.length, 0); })();
}
testcase();
