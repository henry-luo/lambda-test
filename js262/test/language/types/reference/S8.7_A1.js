

/*---
info: Multiple Variables should Referring to a Single Object
es5id: 8.7_A1
description: >
    Create object and refers to the other object, modify a property in
    the original object.  We now see that that change is represented
    in both variables
---*/


var obj = new Object();


var objRef = obj;

objRef.oneProperty = -1;
obj.oneProperty = true;


if(objRef.oneProperty !== true){
  throw new Test262Error('#1: var obj = new Object(); var objRef = obj; objRef.oneProperty = -1; obj.oneProperty = true; objRef.oneProperty === true. Actual: ' + (objRef.oneProperty));
};

