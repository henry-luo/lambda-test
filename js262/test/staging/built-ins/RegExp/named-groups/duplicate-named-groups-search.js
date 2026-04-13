

/*---
description: Test search function with duplicate names in alteration.
features: [regexp-duplicate-named-groups]
includes: [compareArray.js]
---*/

assert.compareArray(3, 'abcxyz'.search(/(?<a>x)|(?<a>y)/));
assert.compareArray(3, 'abcxyz'.search(/(?<a>y)|(?<a>x)/));
assert.compareArray(1, 'aybcxyz'.search(/(?<a>x)|(?<a>y)/));
assert.compareArray(1, 'aybcxyz'.search(/(?<a>y)|(?<a>x)/));
