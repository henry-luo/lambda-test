

/*---
info: Check Function Expression for automatic semicolon insertion
es5id: 7.9_A5.5_T5
description: Insert some LineTerminators into rerutn expression;
---*/


var x =
1 + (function f
(t){
return {
a:
function(){
return t + 1
}
}
}
)
(2 + 3).
a
()

if (x !== 7) {
  throw new Test262Error('#1: Check Function Expression for automatic semicolon insertion');
}
