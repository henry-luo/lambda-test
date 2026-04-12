

/*---
es5id: 10.1.1-10-s
description: >
    Strict Mode - Use Strict Directive Prologue is ''USE STRICT';' in
    which all characters are uppercase
flags: [noStrict]
---*/

function testcase() {
        "USE STRICT";
        var public = 1;

        assert.sameValue(public, 1);
    }
testcase();
