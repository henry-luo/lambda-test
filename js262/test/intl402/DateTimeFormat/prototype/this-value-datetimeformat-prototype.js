

/*---
esid: sec-properties-of-intl-datetimeformat-prototype-object
description: >
    Tests that Intl.DateTimeFormat.prototype is not an object that has
    been initialized as an Intl.DateTimeFormat.
author: Roozbeh Pournader
---*/


assert.throws(TypeError, () => Intl.DateTimeFormat.prototype.format(0),
              "Intl.DateTimeFormat's prototype is not an object that has been initialized as an Intl.DateTimeFormat");
