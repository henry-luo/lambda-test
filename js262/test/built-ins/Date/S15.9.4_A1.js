

/*---
info: The Date constructor has the property "prototype"
esid: sec-date-constructor
description: Checking existence of the property "prototype"
---*/
assert(Date.hasOwnProperty("prototype"), 'Date.hasOwnProperty("prototype") must return true');
