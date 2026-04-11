

/*---
info: |
    For each VariableDeclaration or VariableDeclarationNoIn in the
    code, create a property of the variable object whose name is the Identifier
    in the VariableDeclaration or VariableDeclarationNoIn, whose value is
    undefined and whose attributes are determined by the type of code
es5id: 10.2.1_A5.1_T2
description: >
    Checking existence of the variable object property with formal
    parameter
---*/


function f1(x){
  var x;
  
  return typeof x;
}

assert.sameValue(f1(), "undefined");


function f2(x){
  var x;
  
  return x;
}

assert.sameValue(f2(), undefined);
