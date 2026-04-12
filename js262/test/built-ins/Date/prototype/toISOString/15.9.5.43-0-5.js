

/*---
esid: sec-date.prototype.toisostring
description: >
    Date.prototype.toISOString - The returned string is the UTC time
    zone(0)
---*/

var dateStr = (new Date(0)).toISOString();

assert.sameValue(dateStr[dateStr.length - 1], "Z", 'dateStr[dateStr.length - 1]');
