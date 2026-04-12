

/*---
info: |
    Function declaration in function code - If the variable object
    already has a property with the name of Function Identifier, replace its
    value and attributes. Semantically, this step must follow the creation of
    FormalParameterList properties
es5id: 10.2.1_A4_T1
description: Checking existence of a function with passed parameter
flags: [noStrict]
---*/


function f1(x){
  return x;

  function x(){
    return 7;
  }
}
if(!(f1().constructor.prototype === Function.prototype)){
  throw new Test262Error('#1: f1() returns function');
}


function f2(x){
  return typeof x;

  function x(){
    return 7;
  }
}
if(!(f2() === "function")){
  throw new Test262Error('#2: f2() === "function"');
}


function f3() {
  return typeof arguments;
  function arguments() {
    return 7;
  }
}
if (!(f3() === "function")){
  throw new Test262Error('#3: f3() === "function"');
}
