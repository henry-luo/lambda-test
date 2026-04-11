

/*---
info: String instance has not [[construct]] property
es5id: 15.5.5_A2_T1
description: Create new string object and try new created_string
---*/

var __str = new Object("");


try {
  new __str;
  throw new Test262Error('#1: __str = new Object(""); "new __str" lead to throwing exception');
} catch (e) {
  if (!(e instanceof TypeError)) {
    throw new Test262Error('#1.1: Exception is instance of TypeError. Actual: exception is ' + e);
  }
}

