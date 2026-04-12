

/*---
info: The encodeURIComponent property has the attribute DontEnum
esid: sec-encodeuricomponent-uricomponent
description: Checking use propertyIsEnumerable, for-in
---*/


if (this.propertyIsEnumerable('encodeURIComponent') !== false) {
  throw new Test262Error('#1: this.propertyIsEnumerable(\'encodeURIComponent\') === false. Actual: ' + (this.propertyIsEnumerable('encodeURIComponent')));
}


var result = true;
for (var p in this) {
  if (p === "encodeURIComponent") {
    result = false;
  }
}

if (result !== true) {
  throw new Test262Error('#2: result = true; for (p in this) { if (p === "encodeURIComponent") result = false; }  result === true;');
}
