

/*---
esid: sec-date.prototype.toisostring
description: >
    Date.prototype.toISOString - when this is a String object that
    value format is 'YYYY-MM-DDTHH:mm:ss.sssZ'
    Date.prototype.toISOString throw the TypeError
---*/

var date = new String("1970-01-00000:00:00.000Z");
assert.throws(TypeError, function() {
  Date.prototype.toISOString.call(date);
});
