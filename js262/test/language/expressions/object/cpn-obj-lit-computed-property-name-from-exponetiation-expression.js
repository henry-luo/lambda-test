

/*---
description: Computed property name from exponentiation expression (ComputedPropertyName in ObjectLiteral)
esid: prod-ComputedPropertyName
features: [computed-property-names, exponentiation]
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


let o = {
  [2 ** 2]: 4
};

assert.sameValue(
  o[2 ** 2],
  4
);
assert.sameValue(
  o[String(2 ** 2)],
  4
);
