

/*---
es5id: 7.6.1.2-13-s
description: >
    SyntaxError isn't thrown when 'implementss' occurs
---*/

var implementss = 1;

assert.sameValue(implementss, 1, 'implementss');
