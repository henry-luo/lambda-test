

/*---
es5id: 10.2.1
description: Tests that Intl.Collator.prototype has the required attributes.
author: Norbert Lindenberg
includes: [propertyHelper.js]
---*/

verifyProperty(Intl.Collator, "prototype", {
    writable: false,
    enumerable: false,
    configurable: false,
});
