

/*---
info: The Boolean constructor has the property "prototype"
esid: sec-boolean.prototype
description: Checking existence of the property "prototype"
---*/
assert(Boolean.hasOwnProperty("prototype"), 'Boolean.hasOwnProperty("prototype") must return true');
