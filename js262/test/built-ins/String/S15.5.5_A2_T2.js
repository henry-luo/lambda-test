

/*---
info: String instance has not [[construct]] property
es5id: 15.5.5_A2_T2
description: Checking if creating "new String" fails
---*/


try {
  new new String;
  throw new Test262Error('#1: "new new String" lead to throwing exception');
} catch (e) {
  if (!(e instanceof TypeError)) {
    throw new Test262Error('#1.1: Exception is instance of TypeError. Actual: exception is ' + e);
  }
}

