

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

var completed = 0;
var p = Promise.resolve(true);

if (await p) {
  completed += 1;
}

assert.sameValue(completed, 1);

$DONE();
