

/*---
description: >
  The await keyword can't be escaped
info: |
  ModuleItem:
    StatementListItem[~Yield, +Await, ~Return]

  ...

  AwaitExpression[Yield]:
    await UnaryExpression[?Yield, +Await]
negative:
  phase: parse
  type: SyntaxError
esid: prod-ModuleItem
flags: [module]
features: [top-level-await]
---*/

$DONOTEVALUATE();

\u0061wait 0;
