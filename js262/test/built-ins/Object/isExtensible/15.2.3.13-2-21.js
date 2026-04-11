

/*---
info: |
    Function.constructor
    Function.prototype
    Array.prototype
    String.prototype
    Boolean.prototype
    Number.prototype
    Date.prototype
    RegExp.prototype
    Error.prototype
es5id: 15.2.3.13-2-21
description: >
    Object.isExtensible returns true for all built-in objects
    (Error.prototype)
---*/

var e = Object.isExtensible(Error.prototype);

assert.sameValue(e, true, 'e');
