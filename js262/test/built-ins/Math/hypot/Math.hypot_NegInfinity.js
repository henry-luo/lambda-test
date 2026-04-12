

/*---
es6id: 20.2.2.18
author: Ryan Lewis
description: >
    Math.hypot should return Infinity if called with any argument that
    is -Infinity.
---*/

assert.sameValue(Math.hypot(3, -Infinity), Infinity, 'Math.hypot(3, -Infinity)');
