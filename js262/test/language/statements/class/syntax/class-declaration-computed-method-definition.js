

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
      ...

---*/
class A {
  [1]() {}
}

assert.sameValue(typeof A, "function");
assert.sameValue(typeof A.prototype[1], "function");
