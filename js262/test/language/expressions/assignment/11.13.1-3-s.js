

/*---
es5id: 11.13.1-3-s
description: >
    Strict Mode - TypeError is thrown if The LeftHandSide is a
    reference to a non-existent property of an object whose
    [[Extensible]] internal property has the value false under strict
    mode
flags: [onlyStrict]
---*/

        var obj = {};
        Object.preventExtensions(obj);
assert.throws(TypeError, function() {
            obj.len = 10;
});
