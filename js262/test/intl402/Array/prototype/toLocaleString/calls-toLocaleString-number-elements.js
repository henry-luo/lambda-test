

/*---
esid: sup-array.prototype.tolocalestring
description: >
  Ensure "toLocaleString" is called with locale and options on number elements.
---*/

var n = 0;

var locale = "th-u-nu-thai";
var options = {
    minimumFractionDigits: 3
};

assert.sameValue([n].toLocaleString(locale, options), n.toLocaleString(locale, options));
