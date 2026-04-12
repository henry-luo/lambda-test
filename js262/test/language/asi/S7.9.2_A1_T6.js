

/*---
info: Check examples for automatic semicolon insertion from the standard
es5id: 7.9.2_A1_T6
description: >
    if(a>b) \n else c=d is not a valid sentence in the ECMAScript
    grammar
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


var a=1,b=2,c=3,d;
if(a>b)
else c=d
