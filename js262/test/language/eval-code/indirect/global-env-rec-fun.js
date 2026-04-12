

/*---
es5id: 10.4.2-1-2
description: >
    Indirect call to eval has context set to global context (nested
    function)
---*/

var __10_4_2_1_2 = "str";
function testcase() {
            var _eval = eval;
            var __10_4_2_1_2 = "str1";
            function foo() {
                var __10_4_2_1_2 = "str2";
                assert(_eval("\'str\' === __10_4_2_1_2"), 'indirect eval');
            }
            foo();
    }
testcase();
