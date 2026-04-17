

/*---
info: The length property of parseFloat has the attribute DontEnum
esid: sec-parsefloat-string
description: Checking use propertyIsEnumerable, for-in
---*/


if (parseFloat.propertyIsEnumerable('length') !== false) {
  throw new Test262Error('#1: parseFloat.propertyIsEnumerable(\'length\') === false. Actual: ' + (parseFloat.propertyIsEnumerable('length')));
}


var result = true;
for (var p in parseFloat) {
  if (p === "length") {
    result = false;
  }
}

if (result !== true) {
  throw new Test262Error('#2: result = true; for (p in parseFloat) { if (p === "length") result = false; }  result === true;');
}
