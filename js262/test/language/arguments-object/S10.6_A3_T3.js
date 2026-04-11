

/*---
info: |
    A property is created with name callee with property
    attributes { DontEnum } and no others
es5id: 10.6_A3_T3
description: Checking if deleting arguments.callee property fails
flags: [noStrict]
---*/


function f1(){
  return (delete arguments.callee);
}

try{
  if(!f1()){
    throw new Test262Error("#1: A property callee have attribute { DontDelete }");
  }
}
catch(e){
  throw new Test262Error("#1: arguments object don't exists");
}


var f2 = function(){
  return (delete arguments.callee);
}

try{
  if(!f2()){
    throw new Test262Error("#2: A property callee have attribute { DontDelete }");
  }
}
catch(e){
  throw new Test262Error("#2: arguments object don't exists");
}
