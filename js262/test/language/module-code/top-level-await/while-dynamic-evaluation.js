

/*---
description: >
  Evaluate Await expression for IfStatement
info: |
  ModuleItem:
    StatementListItem[~Yield, +Await, ~Return]

  ...

  UnaryExpression[Yield, Await]
    [+Await]AwaitExpression[?Yield]

  AwaitExpression[Yield]:
    await UnaryExpression[?Yield, +Await]
esid: prod-AwaitExpression
flags: [module, async]
features: [top-level-await]
---*/

var values = [];
var p = Promise.resolve().then(() => {
  
  p = Promise.resolve().then(() => {
    p = Promise.resolve().then(() => {
      values.push(3);
      return false;
    });

    values.push(2);
    return true;
  })

  values.push(1);

  return true;
});

while (await p) {}

assert.sameValue(values.length, 3);
assert.sameValue(values[0], 1);
assert.sameValue(values[1], 2);
assert.sameValue(values[2], 3);

$DONE();
