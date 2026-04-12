

/*---
esid: sec-array.isarray
es5id: 15.4.3.2-1-13
description: Array.isArray applied to Arguments object
---*/

var arg;

(function fun() {
  arg = arguments;
}(1, 2, 3));

assert.sameValue(Array.isArray(arg), false, 'Array.isArray(arguments) must return false');
