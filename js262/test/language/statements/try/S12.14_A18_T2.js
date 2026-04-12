

/*---
info: Catching objects with try/catch/finally statement
es5id: 12.14_A18_T2
description: Catching null
---*/


try{
  throw null;
}
catch(e){
  if (e!==null) throw new Test262Error('#1: Exception ===null. Actual: '+e);
}
