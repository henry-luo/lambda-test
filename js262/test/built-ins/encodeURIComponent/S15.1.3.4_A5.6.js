

/*---
info: The encodeURIComponent property has not prototype property
esid: sec-encodeuricomponent-uricomponent
description: Checking encodeURIComponent.prototype
---*/


if (encodeURIComponent.prototype !== undefined) {
  throw new Test262Error('#1: encodeURIComponent.prototype === undefined. Actual: ' + (encodeURIComponent.prototype));
}
