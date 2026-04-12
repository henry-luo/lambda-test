

/*---
es5id: 10.1.1-9-s
description: >
    Strict Mode - Use Strict Directive Prologue is ''Use strict';' in
    which the first character is uppercase
flags: [noStrict]
---*/

function testcase() {
        "Use strict";
        var public = 1;
        assert.sameValue(public, 1);
    }
testcase();
