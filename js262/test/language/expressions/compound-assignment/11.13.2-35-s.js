

/*---
es5id: 11.13.2-35-s
description: >
    Strict Mode - TypeError is thrown if The LeftHandSide of a
    Compound Assignment operator(/=) is a reference to an accessor
    property with the attribute value {[[Set]]:undefined}
flags: [onlyStrict]
---*/

        var obj = {};
        Object.defineProperty(obj, "prop", {
            get: function () {
                return 11;
            },
            set: undefined,
            enumerable: true,
            configurable: true
        });
assert.throws(TypeError, function() {
            obj.prop /= 20;
});
assert.sameValue(obj.prop, 11, 'obj.prop');
