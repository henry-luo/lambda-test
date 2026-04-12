

/*---
info: The length property of decodeURI is 1
esid: sec-decodeuri-encodeduri
description: decodeURI.length === 1
---*/


if (decodeURI.length !== 1) {
  throw new Test262Error('#1: decodeURI.length === 1. Actual: ' + (decodeURI.length));
}
