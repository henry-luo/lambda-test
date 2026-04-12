

/*---
info: Empty string has type string
es5id: 8.4_A2
description: Create empty string and check it type
---*/


var str = '';
if (typeof(str) !== 'string'){
  throw new Test262Error('#1: var str = \'\'; typeof(str) === \'string\'. Actual: ' + (typeof(str)));
}


var str = "";
if (typeof(str) !== "string"){
  throw new Test262Error('#2: var str = ""; typeof(str) === "string". Actual: ' + (str));
}

