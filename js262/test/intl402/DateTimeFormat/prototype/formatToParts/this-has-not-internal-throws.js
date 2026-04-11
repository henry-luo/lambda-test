

/*---
description: >
  Throws a TypeError if this is not a DateTimeFormat object
---*/

var formatToParts = Intl.DateTimeFormat.prototype.formatToParts;

assert.throws(TypeError, function() {
  formatToParts.call({});
}, "{}");

assert.throws(TypeError, function() {
  formatToParts.call(new Date());
}, "new Date()");
