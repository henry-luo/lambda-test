

/*---
description: Computed property name from generator function (ComputedPropertyName in ObjectLiteral)
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
function * g() { return 1; }


let o = {
  [g()]: 1
};

assert.sameValue(
  o[g()],
  1
);
assert.sameValue(
  o[String(g())],
  1
);
