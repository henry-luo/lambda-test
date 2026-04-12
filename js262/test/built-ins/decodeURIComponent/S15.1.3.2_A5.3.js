

/*---
info: The length property of decodeURIComponent has the attribute ReadOnly
esid: sec-decodeuricomponent-encodeduricomponent
description: Checking if varying the length property fails
includes: [propertyHelper.js]
---*/


var x = decodeURIComponent.length;
verifyNotWritable(decodeURIComponent, "length", null, Infinity);
if (decodeURIComponent.length !== x) {
  throw new Test262Error('#1: x = decodeURIComponent.length; decodeURIComponent.length = Infinity; decodeURIComponent.length === x. Actual: ' + (decodeURIComponent.length));
}
