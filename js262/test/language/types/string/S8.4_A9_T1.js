

/*---
info: Assignment to string literals calls String constructor
es5id: 8.4_A9_T1
description: Simple string variable compare with object String
---*/

var str='ABC';
var strObj=new String('ABC');


if (str.constructor !== strObj.constructor){
  throw new Test262Error('#1: \'ABC\'.constructor === new String(\'ABC\').constructor');
}


if (str != strObj){
  throw new Test262Error('#2: "ABC" == new String("ABC")');
}


if (str === strObj){
  throw new Test262Error('#3: "ABC" !== new String("ABC")');
}

