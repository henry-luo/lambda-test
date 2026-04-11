

/*---
es5id: 7.6.1.2-16-s
description: >
    SyntaxError isn't thrown when '_implements' occurs
---*/

var _implements = 1;

assert.sameValue(_implements, 1, '_implements');
