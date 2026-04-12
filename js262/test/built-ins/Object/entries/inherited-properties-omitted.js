

/*---
esid: sec-object.entries
description: Object.entries does not see inherited properties.
author: Jordan Harband
---*/

var F = function G() {};
F.prototype.a = {};
F.prototype.b = {};

var f = new F();
f.b = {}; 
f.c = {}; 

var result = Object.entries(f);

assert.sameValue(Array.isArray(result), true, 'result is an array');
assert.sameValue(result.length, 2, 'result has 2 items');

assert.sameValue(Array.isArray(result[0]), true, 'first entry is an array');
assert.sameValue(Array.isArray(result[1]), true, 'second entry is an array');

assert.sameValue(result[0][0], 'b', 'first entry has key "b"');
assert.sameValue(result[0][1], f.b, 'first entry has value f.b');
assert.sameValue(result[1][0], 'c', 'second entry has key "c"');
assert.sameValue(result[1][1], f.c, 'second entry has value f.c');
