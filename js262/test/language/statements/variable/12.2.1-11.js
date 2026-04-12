

/*---
es5id: 12.2.1-11
description: arguments as var identifier in eval code is allowed
flags: [noStrict]
---*/

function testcase() {
    eval("var arguments;");
 }
testcase();
