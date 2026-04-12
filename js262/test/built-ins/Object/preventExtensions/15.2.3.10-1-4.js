

/*---
es5id: 15.2.3.10-1-4
description: >
    Object.preventExtensions does not throw TypeError if 'O' is a
    string primitive value
---*/

Object.preventExtensions("abc");
