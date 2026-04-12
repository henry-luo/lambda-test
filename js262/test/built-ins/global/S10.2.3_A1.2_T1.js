

/*---
info: |
    Global object has properties such as built-in objects such as
    Math, String, Date, parseInt, etc
es5id: 10.2.3_A1.2_T1
description: Function execution context - Value Properties
---*/

function test() {
  
  if (NaN === null) {
    throw new Test262Error("#1: NaN === null");
  }

  
  if (Infinity === null) {
    throw new Test262Error("#2: Infinity === null");
  }

  
  if (undefined === null) {
    throw new Test262Error("#3: undefined === null");
  }
}

test();
