

/*---
es5id: 11.13.2-50-s
description: >
    Strict Mode - TypeError is thrown if The LeftHandSide of a
    Compound Assignment operator(<<=) is a reference to a non-existent
    property of an object whose [[Extensible]] internal property is
    false
flags: [onlyStrict]
---*/

        var obj = {};
        Object.preventExtensions(obj);
assert.throws(TypeError, function() {
            obj.len <<= 10;
});
