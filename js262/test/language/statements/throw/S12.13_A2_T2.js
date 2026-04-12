

/*---
info: |
    "throw Expression" returns (throw, GetValue(Result(1)), empty), where 1
    evaluates Expression
es5id: 12.13_A2_T2
description: Throwing null
---*/


try{
  throw null;
}
catch(e){
  if (e!==null) throw new Test262Error('#1: Exception === null. Actual:  Exception ==='+ e  );
}
