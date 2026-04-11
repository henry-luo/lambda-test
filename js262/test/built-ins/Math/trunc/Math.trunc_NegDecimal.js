

/*---
es6id: 20.2.2.35
author: Ryan Lewis
description: Math.trunc should return -0 if called with a value between 0 and -1.
---*/

assert.sameValue(Math.trunc(-.9), -0, 'Math.trunc(-.9)');
