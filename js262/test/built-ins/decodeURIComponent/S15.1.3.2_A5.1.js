

/*---
info: The length property of decodeURIComponent has the attribute DontEnum
esid: sec-decodeuricomponent-encodeduricomponent
description: Checking use propertyIsEnumerable, for-in
---*/


if (decodeURIComponent.propertyIsEnumerable('length') !== false) {
  throw new Test262Error('#1: decodeURIComponent.propertyIsEnumerable(\'length\') === false. Actual: ' + (decodeURIComponent.propertyIsEnumerable('length')));
}


var result = true;
for (var p in decodeURIComponent) {
  if (p === "length") {
    result = false;
  }
}

if (result !== true) {
  throw new Test262Error('#2: result = true; for (p in decodeURIComponent) { if (p === "length") result = false; }  result === true;');
}
