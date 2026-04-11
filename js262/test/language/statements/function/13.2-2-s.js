

/*---
es5id: 13.2-2-s
description: >
    StrictMode - A TypeError is thrown when a strict mode code writes
    to properties named 'caller' of function instances.
flags: [onlyStrict]
---*/


assert.throws(TypeError, function() {
    var foo = function () {
    }
    foo.caller = 20;
});
