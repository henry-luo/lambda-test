

/*---
es5id: 10.4.3-1-21-s
description: >
    Strict Mode - checking 'this' (New'ed object from
    FunctionDeclaration defined within strict mode)
flags: [onlyStrict]
---*/

function f() {
    return this;
}

assert.notSameValue((new f()), this, '(new f())');
assert.notSameValue(typeof (new f()), "undefined", 'typeof (new f())');
