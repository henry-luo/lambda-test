

/*---
esid: sec-number.prototype.tofixed
description: >
  Number.prototype.toFixed returns a string value
---*/

assert.sameValue(typeof(123.456).toFixed(), "string");
