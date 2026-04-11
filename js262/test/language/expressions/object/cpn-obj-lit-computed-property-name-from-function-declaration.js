

/*---
description: Computed property name from function (ComputedPropertyName in ObjectLiteral)
esid: prod-ComputedPropertyName
features: [computed-property-names]
flags: [generated]
info: |
    ObjectLiteral:
      { PropertyDefinitionList }

    PropertyDefinitionList:
      PropertyDefinition

    PropertyDefinition:
      PropertyName: AssignmentExpression

    PropertyName:
      ComputedPropertyName

    ComputedPropertyName:
      [ AssignmentExpression ]
---*/
function f() {}


let o = {
  [f()]: 1
};

assert.sameValue(
  o[f()],
  1
);
assert.sameValue(
  o[String(f())],
  1
);
