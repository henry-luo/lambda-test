

/*---
esid: sec-string.prototype.padstart
description: >
  String#padStart should return the string unchanged when
  an explicit empty string is provided
author: Jordan Harband
---*/

assert.sameValue('abc'.padStart(5, ''), 'abc');
