

/*---
description: >
    Arrays containg the same elements in the same order are equivalent.
includes: [compareArray.js]
---*/

var obj = {};
var first = [0, 1, '', 's', undefined, null, obj];
var second = [0, 1, '', 's', undefined, null, obj];

assert.compareArray(first, second, 'Arrays containing the same elements in the same order are equivalent.');
