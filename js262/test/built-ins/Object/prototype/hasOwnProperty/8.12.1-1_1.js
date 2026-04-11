

/*---
es5id: 8.12.1-1_1
description: Properties - [[HasOwnProperty]] (property does not exist)
---*/

var o = {};

assert.sameValue(o.hasOwnProperty("foo"), false, 'o.hasOwnProperty("foo")');
