

/*---
description: Computed property name from exponentiation expression (ComputedPropertyName in ClassExpression)
esid: prod-ComputedPropertyName
features: [computed-property-names, exponentiation]
flags: [generated]
info: |
    ClassExpression:
      classBindingIdentifier opt ClassTail

    ClassTail:
      ClassHeritage opt { ClassBody opt }

    ClassBody:
      ClassElementList

    ClassElementList:
      ClassElement

    ClassElement:
      MethodDefinition

    MethodDefinition:
      PropertyName ...
      get PropertyName ...
      set PropertyName ...

    PropertyName:
      ComputedPropertyName

    ComputedPropertyName:
      [ AssignmentExpression ]
---*/


let C = class {
  [2 ** 2]() {
    return 4;
  }
  static [2 ** 2]() {
    return 4;
  }
};

let c = new C();

assert.sameValue(
  c[2 ** 2](),
  4
);
assert.sameValue(
  C[2 ** 2](),
  4
);
assert.sameValue(
  c[String(2 ** 2)](),
  4
);
assert.sameValue(
  C[String(2 ** 2)](),
  4
);
