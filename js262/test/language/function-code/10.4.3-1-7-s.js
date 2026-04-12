

/*---
es5id: 10.4.3-1-7-s
description: >
    Strict Mode - checking 'this' (FunctionDeclaration defined within
    strict mode)
flags: [onlyStrict]
---*/

function f() {
    return typeof this;
}

assert.sameValue(f(), "undefined", 'f()');
