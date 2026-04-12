

/*---
esid: sec-string.prototype.padend
description: >
  String#padEnd should return the string unchanged when
  an explicit empty string is provided
author: Jordan Harband
---*/

assert.sameValue('abc'.padEnd(5, ''), 'abc');
