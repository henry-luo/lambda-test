

/*---
es5id: 11.2.1
description: Tests that Intl.NumberFormat.prototype has the required attributes.
author: Norbert Lindenberg
includes: [propertyHelper.js]
---*/

verifyProperty(Intl.NumberFormat, "prototype", {
    writable: false,
    enumerable: false,
    configurable: false,
});
