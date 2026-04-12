

/*---
esid: sec-error-message
description: >
    Error throws TypeError when _message_ cannot be converted to a primitive
info: |
    Error ( _message_ [ , _options_ ] )

    3. If _message_ is not *undefined*, then
        a. Let _msg_ be ? ToString(_message_).

    ToString (_argument_)

    10. Let _primValue_ be ? ToPrimitive(_argument_, ~string~).
---*/
assert.throws(TypeError, function () {
    Error({toString: undefined, valueOf: undefined})
}, "Error should throw a TypeError in its ToPrimitive step");
