

/*---
esid: sec-date.prototype.setfullyear
description: >
    Date.prototype.setFullYear - Date.prototype is itself not an
    instance of Date
---*/


assert.throws(TypeError, function() {
  Date.prototype.setFullYear(2012);
});
