

/*---
esid: sec-regexp.prototype.tostring
description: >
    `this` value is resolved using strict mode semantics,
    throwing TypeError if called as top-level function.
info: |
    RegExp.prototype.toString ( )

    1. Let R be the this value.
    2. If Type(R) is not Object, throw a TypeError exception.

    ToObject ( argument )

    Argument Type: Undefined
    Result: Throw a TypeError exception.
---*/

["source", "flags"].forEach(function(key) {
    Object.defineProperty(this, key, {
        get: function() {
            throw new Test262Error(key + " lookup should not be performed");
        },
    });
}, this);

var toString = RegExp.prototype.toString;
assert.throws(TypeError, function() {
    toString();
});
