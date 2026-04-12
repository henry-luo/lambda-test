

/*---
es6id: 20.2.2.18
author: Ryan Lewis
description: Math.hypot should return 0 if called with no arguments.
---*/

assert.sameValue(Math.hypot(), 0, 'Math.hypot()');
