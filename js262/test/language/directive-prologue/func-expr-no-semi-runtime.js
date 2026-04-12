

/*---
esid: use-strict-directive
es5id: 10.1.1-2-s
description: >
    Strict Mode - Use Strict Directive Prologue is ''use strict''
    which lost the last character ';'
flags: [noStrict]
---*/

assert.throws(ReferenceError, function() {
        "use strict"

        test262unresolvable = null;
});
