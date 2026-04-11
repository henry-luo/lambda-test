

/*---
info: Blocks within "for(with var)" braces are not allowed
es5id: 12.6.3_A8.1_T2
description: >
    Checking if execution of "for(var index=0; {index++;index<100;};
    index*2;) {  arr.add(""+index);}" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var arr = [];


for(var index=0; {index++;index<100;}; index*2;) {	arr.add(""+index);};

