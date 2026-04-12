

/*---
info: "[[Call]] executes code associated with the object"
es5id: 8.6.2_A5_T1
description: >
    Call function-property of object, property defined  as testScreen
    = {touch:function(){count++}}
---*/

this.count=0;

var testScreen = {touch:function(){count++}};


testScreen.touch();
if (count !==1) {
  throw new Test262Error('#1: this.count=0; testScreen = {touch:function(){count++}}; testScreen.touch(); count === 1. Actual: ' + (count));
}


testScreen['touch']();
if (count !==2) {
  throw new Test262Error('#2: this.count=0; testScreen = {touch:function(){count++}}; testScreen.touch(); testScreen[\'touch\'](); count === 2. Actual: ' + (count));
}

