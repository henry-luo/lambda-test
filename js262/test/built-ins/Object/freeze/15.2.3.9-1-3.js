

/*---
es5id: 15.2.3.9-1-3
description: >
    Object.freeze does not throw TypeError if type of first param is
    boolean primitive
---*/

Object.freeze(false);
Object.freeze(true);
