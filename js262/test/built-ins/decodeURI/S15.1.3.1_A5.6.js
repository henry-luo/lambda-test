

/*---
info: The decodeURI property has not prototype property
esid: sec-decodeuri-encodeduri
description: Checking decodeURI.prototype
---*/


if (decodeURI.prototype !== undefined) {
  throw new Test262Error('#1: decodeURI.prototype === undefined. Actual: ' + (decodeURI.prototype));
}
