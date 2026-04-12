

/*---
info: The length property of encodeURIComponent is 1
esid: sec-encodeuricomponent-uricomponent
description: encodeURIComponent.length === 1
---*/


if (encodeURIComponent.length !== 1) {
  throw new Test262Error('#1: encodeURIComponent.length === 1. Actual: ' + (encodeURIComponent.length));
}
