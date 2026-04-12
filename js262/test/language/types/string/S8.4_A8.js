

/*---
info: |
    Empty string, 0, false are all equal (==) to each other, since they all
    evaluate to 0
es5id: 8.4_A8
description: Compare empty string with undefined, null, 0 and false
---*/

var str='';


if (str == undefined){
  throw new Test262Error('#1: Empty string and undefined are not equal (!=) to each other');
}


if (str == null){
  throw new Test262Error('#1: Empty string and Null are not equal (!=) to each other');
}


if (str != 0){
  throw new Test262Error('#3: Empty string and 0 are equal (==) to each other, since they all evaluate to 0');
}


if (str != false){
  throw new Test262Error('#4: Empty string and false are equal (==) to each other, since they all evaluate to 0');
}

