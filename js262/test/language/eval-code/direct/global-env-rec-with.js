

/*---
es5id: 10.4.2-1-4
description: >
    Direct call to eval has context set to local context (with block)
flags: [noStrict]
---*/

var __10_4_2_1_4 = "str";
function testcase() {
            var o = new Object();
            o.__10_4_2_1_4 = "str2";
            var __10_4_2_1_4 = "str1";
            with (o) {
                assert(eval("\'str2\' === __10_4_2_1_4"), 'direct eval');
            }
    }
testcase();
