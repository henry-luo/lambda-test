

/*---
description: GroupSpecifier must be identifier-like.
esid: prod-GroupSpecifier
negative:
  phase: parse
  type: SyntaxError
features: [regexp-named-groups]
---*/

$DONOTEVALUATE();

/(?<a\uDCA4>.)/;
