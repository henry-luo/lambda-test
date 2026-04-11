

/*---
description: Computed property name from condition expression (ComputedPropertyName in ObjectLiteral)
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
  [false ? 1 : 2]: 1
};

assert.sameValue(
  o[false ? 1 : 2],
  1
);
assert.sameValue(
  o[String(false ? 1 : 2)],
  1
);
