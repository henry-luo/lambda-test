

/*---
esid: sec-properties-of-intl-numberformat-prototype-object
description: >
    Tests that Intl.NumberFormat.prototype is not an object that has been
    initialized as an Intl.NumberFormat.
author: Roozbeh Pournader
---*/


assert.throws(TypeError, () => Intl.NumberFormat.prototype.format(0),
              "Intl.NumberFormat's prototype is not an object that has been initialized as an Intl.NumberFormat");
