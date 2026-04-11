

/*---
es5id: 10.1.1-4-s
description: >
    Strict Mode - Use Strict Directive Prologue is ''use strict ';'
    which the last character is space
flags: [noStrict]
---*/

function testcase() {
        "use strict ";
        var public = 1;

        assert.sameValue(public, 1);
    }
testcase();
