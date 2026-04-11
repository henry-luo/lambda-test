

/*---
description: Computed property name from multiplicative expression "multiply" (ComputedPropertyName in ObjectLiteral)
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


let o = {
  [1 * 1]: 1
};

assert.sameValue(
  o[1 * 1],
  1
);
assert.sameValue(
  o[String(1 * 1)],
  1
);
