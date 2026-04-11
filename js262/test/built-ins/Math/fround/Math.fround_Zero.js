

/*---
es6id: 20.2.2.17
author: Ryan Lewis
description: Math.fround should return arg if called with 0 or -0.
---*/

assert.sameValue(Math.fround(0), 0, 'Math.fround(0)');
assert.sameValue(Math.fround(-0), -0, 'Math.fround(-0)');
