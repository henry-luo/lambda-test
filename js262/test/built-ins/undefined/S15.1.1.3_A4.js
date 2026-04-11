

/*---
info: The undefined is DontEnum
esid: sec-undefined
description: Use for-in statement
---*/


for (var prop in this) {
  if (prop === "undefined") {
    throw new Test262Error('#1: The undefined is DontEnum');
  }
}
