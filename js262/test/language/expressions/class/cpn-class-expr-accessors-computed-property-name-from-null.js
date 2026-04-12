

/*---
description: Computed property name from condition expression (ComputedPropertyName in ClassExpression)
esid: prod-ComputedPropertyName
features: [computed-property-names]
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
  get [null]() {
    return null;
  }

  set [null](v) {
    return null;
  }

  static get [null]() {
    return null;
  }

  static set [null](v) {
    return null;
  }
};

let c = new C();

assert.sameValue(
  c[null],
  null
);
assert.sameValue(
  c[null] = null,
  null
);

assert.sameValue(
  C[null],
  null
);
assert.sameValue(
  C[null] = null,
  null
);
assert.sameValue(
  c[String(null)],
  null
);
assert.sameValue(
  c[String(null)] = null,
  null
);

assert.sameValue(
  C[String(null)],
  null
);
assert.sameValue(
  C[String(null)] = null,
  null
);
