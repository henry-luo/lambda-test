

/*---
info: A property can have attribute DontEnum like all properties of Number
es5id: 8.6.1_A2
description: Try to enumerate properties of Number
---*/


var count=0;
for (p in Number) count++;
if (count > 0){
  throw new Test262Error('#1: count=0; for (p in Number) count++; count > 0. Actual: ' + (count));
}
