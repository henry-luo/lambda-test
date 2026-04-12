

/*---
esid: use-strict-directive
es5id: 10.1.1-27-s
description: >
    Strict Mode - Function code of Accessor PropertyAssignment
    contains Use Strict Directive which appears in the middle of the
    block(getter)
flags: [noStrict]
---*/

        var obj = {};
        Object.defineProperty(obj, "accProperty", {
            get: function () {
                test262unresolvable = null;
                "use strict";
                return 11;
            }
        });

assert.sameValue(obj.accProperty, 11, 'obj.accProperty');
assert.sameValue(test262unresolvable, null);
