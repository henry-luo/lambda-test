

/*---
info: The length property of decodeURIComponent is 1
esid: sec-decodeuricomponent-encodeduricomponent
description: decodeURIComponent.length === 1
---*/


if (decodeURIComponent.length !== 1) {
  throw new Test262Error('#1: decodeURIComponent.length === 1. Actual: ' + (decodeURIComponent.length));
}
