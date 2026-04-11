

/*---
description: GroupName is `< RegExpIdentifierName >`.
esid: prod-GroupName
negative:
  phase: parse
  type: SyntaxError
features: [regexp-named-groups]
---*/

$DONOTEVALUATE();

/\k<>/u;
