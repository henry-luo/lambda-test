

/*---
info: The length property of parseInt does not have the attribute DontDelete
esid: sec-parseint-string-radix
description: Checking use hasOwnProperty, delete
---*/

assert.sameValue(parseInt.hasOwnProperty('length'), true, 'parseInt.hasOwnProperty(\'length\') must return true');

delete parseInt.length;

assert.sameValue(parseInt.hasOwnProperty('length'), false, 'parseInt.hasOwnProperty(\'length\') must return false');
assert.notSameValue(parseInt.length, undefined, 'The value of parseInt.length is expected to not equal ``undefined``');
