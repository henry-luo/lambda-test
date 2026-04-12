

/*---
info: Block within a "for-in" Expression is not allowed
es5id: 12.6.4_A15
description: Using block within "for-in" Expression
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var __arr=[1,2,3];


for(x in {__arr;}){
   break ;
};

