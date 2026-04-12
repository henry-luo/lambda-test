

/*---
es5id: 11.4.5-2-3-s
description: SyntaxError is not thrown for --arguments[...]
---*/

function testcase() {
        arguments[1] = 7;
        --arguments[1];
        assert.sameValue(arguments[1], 6, 'arguments[1]');
    }
testcase();
