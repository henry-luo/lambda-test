

/*---
info: |
    A property is created with name callee with property
    attributes { DontEnum } and no others
es5id: 10.6_A3_T4
description: Overriding arguments.callee property
flags: [noStrict]
---*/

var str = "something different";

function f1(){
  arguments.callee = str;
  return arguments;
}

try{
  if(f1().callee !== str){
    throw new Test262Error("#1: A property callee have attribute { ReadOnly }");
  }
}
catch(e){
  throw new Test262Error("#1: arguments object don't exists");
}


var f2 = function(){
    arguments.callee = str;
    return arguments;
  }
try{
  if(f2().callee !== str){
    throw new Test262Error("#2: A property callee have attribute { ReadOnly }");
  }
}
catch(e){
  throw new Test262Error("#2: arguments object don't exists");
}
