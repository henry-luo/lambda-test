

/*---
info: |
    Global object has properties such as built-in objects such as
    Math, String, Date, parseInt, etc
es5id: 10.2.3_A1.1_T4
description: Global execution context - Other Properties
---*/


if (Math === null) {
  throw new Test262Error("#27: Math === null");
}
