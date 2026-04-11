

/*---
es5id: 10.4.2-1-1
description: Direct call to eval has context set to local context
---*/

var __10_4_2_1_1_1 = "str";
function testcase() {
    var __10_4_2_1_1_1 = "str1";
    assert(eval("\'str1\' === __10_4_2_1_1_1"), 'direct eval');
}
testcase();
