

/*---
info: The encodeURI property has not prototype property
esid: sec-encodeuri-uri
description: Checking encodeURI.prototype
---*/


if (encodeURI.prototype !== undefined) {
  throw new Test262Error('#1: encodeURI.prototype === undefined. Actual: ' + (encodeURI.prototype));
}
