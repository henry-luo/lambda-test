

/*---
es5id: 15.2.3.3-1-4
description: >
    Object.getOwnPropertyDescriptor - TypeError is not thrown when
    first param is a number
---*/

Object.getOwnPropertyDescriptor(-2, "foo");
