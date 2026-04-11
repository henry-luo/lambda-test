

/*---
description: >
  Valid syntax for top level await.
  AwaitExpression ImportCall
info: |
  ModuleItem:
    StatementListItem[~Yield, +Await, ~Return]

  ...

  UnaryExpression[Yield, Await]
    [+Await]AwaitExpression[?Yield]

  AwaitExpression[Yield]:
    await UnaryExpression[?Yield, +Await]

  ...

  LeftHandSideExpression[Yield, Await]:
    NewExpression[?Yield, ?Await]
    CallExpression[?Yield, ?Await]

  CallExpression[Yield, Await]:
    ImportCall[?Yield, ?Await]

  ImportCall[Yield, Await]:
    import ( AssignmentExpression[+In, ?Yield, ?Await] )
esid: prod-AwaitExpression
flags: [module]
features: [top-level-await, dynamic-import]
---*/

try {
  await import('foo');
} catch (e) {
  
  
}
