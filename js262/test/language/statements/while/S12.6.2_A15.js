

/*---
info: Block within a "while" Expression is not allowed
es5id: 12.6.2_A15
description: Expression is "{0}"
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


while({1}){
   break ;
};

