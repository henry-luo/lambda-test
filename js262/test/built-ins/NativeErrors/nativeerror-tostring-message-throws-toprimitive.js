

/*---
esid: sec-nativeerror
description: >
    NativeError constructors throw TypeError when _message_ cannot be converted to a primitive
info: |
    _NativeError_ ( _message_ [ , _options_ ] )

    3. If _message_ is not *undefined*, then
        a. Let _msg_ be ? ToString(_message_).

    ToString (_argument_)

    10. Let _primValue_ be ? ToPrimitive(_argument_, ~string~).
---*/

assert.throws(TypeError, function() {
    EvalError({toString: undefined, valueOf: undefined})
}, "EvalError should throw a TypeError in its ToPrimitive step")


assert.throws(TypeError, function() {
    RangeError({toString: undefined, valueOf: undefined})
}, "RangeError should throw a TypeError in its ToPrimitive step")


assert.throws(TypeError, function() {
    ReferenceError({toString: undefined, valueOf: undefined})
}, "ReferenceError should throw a TypeError in its ToPrimitive step")


assert.throws(TypeError, function() {
    SyntaxError({toString: undefined, valueOf: undefined})
}, "SyntaxError should throw a TypeError in its ToPrimitive step")


assert.throws(TypeError, function() {
    TypeError({toString: undefined, valueOf: undefined})
}, "TypeError should throw a TypeError in its ToPrimitive step")


assert.throws(TypeError, function() {
    URIError({toString: undefined, valueOf: undefined})
}, "URIError should throw a TypeError in its ToPrimitive step")
