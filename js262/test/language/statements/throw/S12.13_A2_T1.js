

/*---
info: |
    "throw Expression" returns (throw, GetValue(Result(1)), empty), where 1
    evaluates Expression
es5id: 12.13_A2_T1
description: Throwing undefined
---*/


try{
  throw undefined;
}
catch(e){
  if (e!==undefined) throw new Test262Error('#1: Exception === undefined. Actual:  Exception ==='+ e  );
}
