

/*---
es5id: 8.7.2-6-s
description: >
    TypeError isn't thrown if LeftHandSide is a reference to a writable data
    property
---*/

        var _8_7_2_6 = {};
        Object.defineProperty(_8_7_2_6, "b", {
            writable: true
        });

        _8_7_2_6.b = 11;

assert.sameValue(_8_7_2_6.b, 11, '_8_7_2_6.b');
