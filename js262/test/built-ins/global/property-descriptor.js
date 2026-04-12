

/*---
esid: sec-other-properties-of-the-global-object-globalthis
description: "'globalThis' should be writable, non-enumerable, and configurable"
author: Jordan Harband
includes: [propertyHelper.js]
features: [globalThis]
---*/

verifyProperty(this, "globalThis", {
    enumerable: false,
    writable: true,
    configurable: true,
});
