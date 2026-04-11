

/*---
info: The length property of encodeURIComponent has the attribute DontEnum
esid: sec-encodeuricomponent-uricomponent
description: Checking use propertyIsEnumerable, for-in
---*/


if (encodeURIComponent.propertyIsEnumerable('length') !== false) {
  throw new Test262Error('#1: encodeURIComponent.propertyIsEnumerable(\'length\') === false. Actual: ' + (encodeURIComponent.propertyIsEnumerable('length')));
}


var result = true;
for (var p in encodeURIComponent) {
  if (p === "length") {
    result = false;
  }
}

if (result !== true) {
  throw new Test262Error('#2: result = true; for (p in encodeURIComponent) { if (p === "length") result = false; }  result === true;');
}
