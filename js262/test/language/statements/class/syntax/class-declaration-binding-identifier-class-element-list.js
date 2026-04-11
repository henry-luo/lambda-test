

/*---
es6id: 14.5
description: >
    ClassDeclaration:
      class BindingIdentifier ClassTail

    ClassTail:
      ... { ClassBodyopt }

    ClassBody[Yield] :
      ClassElementList[?Yield]


    ClassElementList[Yield] :
      ClassElement[?Yield]
      ClassElementList[?Yield] ClassElement[?Yield]

    ClassElement[Yield] :
      MethodDefinition[?Yield]
      static MethodDefinition[?Yield]
      ;


---*/
class A {
  method() {}
  static method() {}
  ;
}

assert.sameValue(typeof A, "function");
assert.sameValue(typeof A.prototype.method, "function");
assert.sameValue(typeof A.method, "function");
