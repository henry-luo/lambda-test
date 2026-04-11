

/*---
es6id: 14.5.1
description: >
    The opposite of:

      ClassBody : ClassElementList

      It is a Syntax Error if PrototypePropertyNameList of ClassElementList contains more than one occurrence of "constructor".
---*/
class A {
  constructor() {}
}

assert.sameValue(typeof A, "function");

