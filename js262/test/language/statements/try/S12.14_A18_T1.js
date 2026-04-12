

/*---
info: Catching objects with try/catch/finally statement
es5id: 12.14_A18_T1
description: Catching undefined
---*/


try{
  throw undefined;
}
catch(e){
  if (e!==undefined) throw new Test262Error('#1: Exception === undefined. Actual: '+e);
}
