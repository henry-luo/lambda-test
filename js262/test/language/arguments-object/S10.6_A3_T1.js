

/*---
info: |
    A property is created with name callee with property
    attributes { DontEnum } and no others
es5id: 10.6_A3_T1
description: Checking existence of arguments.callee property
---*/


function f1(){
  return arguments.hasOwnProperty("callee");
}
try{
  if(f1() !== true){
    throw new Test262Error("#1: arguments object doesn't contains property 'callee'");
  }
}
catch(e){
  throw new Test262Error("#1: arguments object doesn't exists");
}


var f2 = function(){return arguments.hasOwnProperty("callee");};
try{
  if(f2() !== true){
    throw new Test262Error("#2: arguments object doesn't contains property 'callee'");
  }
}
catch(e){
  throw new Test262Error("#2: arguments object doesn't exists");
}
