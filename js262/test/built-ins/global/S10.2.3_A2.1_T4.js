

/*---
info: Global object properties have attributes { DontEnum }
es5id: 10.2.3_A2.1_T4
description: Global execution context - Other Properties
---*/


for (var x in this) {
  if (x === 'Math') {
    throw new Test262Error("#1: 'Math' have attribute DontEnum");
  }
}
