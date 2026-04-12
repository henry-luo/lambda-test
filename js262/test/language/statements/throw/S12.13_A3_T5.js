

/*---
info: 1. Evaluate Expression
es5id: 12.13_A3_T5
description: Evaluating equation expression
---*/


var a=true;
var b=false;
try{
  throw ((a&&(!b))?"exception":" #1");
}
catch(e){
  if (e!=="exception") throw new Test262Error('#1: Exception ==="exception"(operaton ? , ). Actual:  Exception ==='+e  );
}
