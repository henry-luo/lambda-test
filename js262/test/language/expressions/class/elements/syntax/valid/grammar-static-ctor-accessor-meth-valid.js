

/*---
description: Static Accessor Methods can be named constructor (class expression)
esid: prod-ClassElement
features: [class]
flags: [generated]
info: |
    Class Definitions / Static Semantics: Early Errors

    ClassElement : MethodDefinition
        It is a Syntax Error if PropName of MethodDefinition is not "constructor" and HasDirectSuper of MethodDefinition is true.
        It is a Syntax Error if PropName of MethodDefinition is "constructor" and SpecialMethod of MethodDefinition is true.
    ClassElement : static MethodDefinition
        It is a Syntax Error if HasDirectSuper of MethodDefinition is true.
        It is a Syntax Error if PropName of MethodDefinition is "prototype".

---*/


var C = class {
  static get constructor() {}
  static set constructor(_) {}
  constructor() {} 
};

assert(C.hasOwnProperty('constructor'));
assert(C.prototype.hasOwnProperty('constructor'));
assert.notSameValue(C.prototype.constructor, C.constructor);
