

/*---
esid: use-strict-directive
es5id: 10.1.1-25-s
description: >
    Strict Mode - Function code of Accessor PropertyAssignment
    contains Use Strict Directive which appears at the start of the
    block(getter)
flags: [noStrict]
---*/


assert.throws(ReferenceError, function() {
            var obj = {};
            Object.defineProperty(obj, "accProperty", {
                set: function () {
                    "use strict";
                    test262unresolvable = null;
                    return 11;
                }
            });
            obj.accProperty = "overrideData";
});
