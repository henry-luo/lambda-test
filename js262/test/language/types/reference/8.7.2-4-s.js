

/*---
es5id: 8.7.2-4-s
description: >
    Strict Mode - TypeError is thrown if LeftHandSide is a reference
    to an accessor property with no setter
flags: [onlyStrict]
---*/

        var _8_7_2_4 = {};
        var _8_7_2_4_bValue = 1;
        Object.defineProperty(_8_7_2_4, "b", {
            get: function () { return _8_7_2_4_bValue; }
        });
assert.throws(TypeError, function() {
            _8_7_2_4.b = 11;
});
