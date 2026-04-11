

/*---
info: The decodeURIComponent property has not prototype property
esid: sec-decodeuricomponent-encodeduricomponent
description: Checking decodeURIComponent.prototype
---*/


if (decodeURIComponent.prototype !== undefined) {
  throw new Test262Error('#1: decodeURIComponent.prototype === undefined. Actual: ' + (decodeURIComponent.prototype));
}
