

/*---
es5id: 10.1.1-1-s
description: >
    Strict Mode - Use Strict Directive Prologue is 'use  strict';
    which contains two space between 'use' and 'strict'
flags: [noStrict]
---*/

function testcase() {
        "use  strict";
        var public = 1;

        assert.sameValue(public, 1);
    }
testcase();
