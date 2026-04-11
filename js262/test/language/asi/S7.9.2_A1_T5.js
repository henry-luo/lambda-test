

/*---
info: Check examples for automatic semicolon insertion from the standard
es5id: 7.9.2_A1_T5
description: >
    a=b \n ++c is a valid sentence in the ECMAScript grammar  with
    automatic semicolon insertion, but a!==b++c
---*/


var a=1,b=2,c=3;
a=b
++c

if (a!==b) throw new Test262Error('#1: Automatic semicolon insertion not work with ++');
