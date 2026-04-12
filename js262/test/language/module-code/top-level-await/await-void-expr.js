

/*---
description: >
  AwaitExpression void resolves into undefined
info: |
  ModuleItem:
    StatementListItem[~Yield, +Await, ~Return]

  ...

  UnaryExpression[Yield, Await]
    void UnaryExpression[?Yield, ?Await]
    [+Await]AwaitExpression[?Yield]

  AwaitExpression[Yield]:
    await UnaryExpression[?Yield, +Await]
esid: prod-AwaitExpression
flags: [module, async]
features: [top-level-await]
---*/

var x = await void 1;

assert.sameValue(x, undefined);

$DONE();
