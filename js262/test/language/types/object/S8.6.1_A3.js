

/*---
info: |
    A property can have attribute DontDelete like NaN propertie of Number
    object
es5id: 8.6.1_A3
description: Try to delete Number.NaN
flags: [noStrict]
---*/


if (delete Number.NaN !== false){
  throw new Test262Error('#1: delete Number.NaN === false. Actual: ' + (delete Number.NaN));
};


if (typeof(Number.NaN) === "undefined"){
  throw new Test262Error('#2: delete Number.NaN; typeof(Number.NaN) !== "undefined" ');
};

