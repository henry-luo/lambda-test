

/*---
description: Computed property name from arrow function (ComputedPropertyName in ClassExpression)
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
  get [() => { }]() {
    return 1;
  }

  set [() => { }](v) {
    return 1;
  }

  static get [() => { }]() {
    return 1;
  }

  static set [() => { }](v) {
    return 1;
  }
};

let c = new C();

assert.sameValue(
  c[() => { }],
  1
);
assert.sameValue(
  c[() => { }] = 1,
  1
);

assert.sameValue(
  C[() => { }],
  1
);
assert.sameValue(
  C[() => { }] = 1,
  1
);
assert.sameValue(
  c[String(() => { })],
  1
);
assert.sameValue(
  c[String(() => { })] = 1,
  1
);

assert.sameValue(
  C[String(() => { })],
  1
);
assert.sameValue(
  C[String(() => { })] = 1,
  1
);
