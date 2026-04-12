

/*---
info: array.forEach can be frozen while in progress
esid: sec-array.prototype.foreach
description: Freezes array.forEach during a forEach to see if it works
---*/

['z'].forEach(function() {
  Object.freeze(Array.prototype.forEach);
});
