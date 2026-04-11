

/*---
es5id: 12.2.1
description: >
    Tests that Intl.DateTimeFormat.prototype has the required
    attributes.
author: Norbert Lindenberg
includes: [propertyHelper.js]
---*/

verifyProperty(Intl.DateTimeFormat, "prototype", {
    writable: false,
    enumerable: false,
    configurable: false,
});
