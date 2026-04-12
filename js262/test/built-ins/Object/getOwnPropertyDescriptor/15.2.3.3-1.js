

/*---
es5id: 15.2.3.3-1
description: >
    Object.getOwnPropertyDescriptor does not throw TypeError if type
    of first param is not Object
---*/

Object.getOwnPropertyDescriptor(0, "foo");
