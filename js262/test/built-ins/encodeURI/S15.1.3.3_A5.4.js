

/*---
info: The length property of encodeURI is 1
esid: sec-encodeuri-uri
description: encodeURI.length === 1
---*/


if (encodeURI.length !== 1) {
  throw new Test262Error('#1: encodeURI.length === 1. Actual: ' + (encodeURI.length));
}
