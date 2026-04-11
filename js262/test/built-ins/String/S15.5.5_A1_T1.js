

/*---
info: String instance has not [[call]] property
es5id: 15.5.5_A1_T1
description: Create new String and try call it
---*/

var __str = new String;


try {
  __str();
  throw new Test262Error('#1: __str = new String; __str() lead to throwing exception');
} catch (e) {
  if (!(e instanceof TypeError)) {
    throw new Test262Error('#1.1: Exception is instance of TypeError. Actual: exception is ' + e);
  }
}

