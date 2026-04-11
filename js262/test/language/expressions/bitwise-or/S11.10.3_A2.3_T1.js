

/*---
info: |
    ToInt32(first expression) is called first, and then ToInt32(second
    expression)
es5id: 11.10.3_A2.3_T1
description: Checking with "throw"
---*/


var x = { valueOf: function () { throw "x"; } };
var y = { valueOf: function () { throw "y"; } };
try {
   x | y;
   throw new Test262Error('#1.1: var x = { valueOf: function () { throw "x"; } }; var y = { valueOf: function () { throw "y"; } }; x | y throw "x". Actual: ' + (x | y));
} catch (e) {
   if (e === "y") {
     throw new Test262Error('#1.2: ToInt32(first expression) is called first, and then ToInt32(second expression)');
   } else {
     if (e !== "x") {
       throw new Test262Error('#1.3: var x = { valueOf: function () { throw "x"; } }; var y = { valueOf: function () { throw "y"; } }; x | y throw "x". Actual: ' + (e));
     }
   }
}
