

/*---
description: GroupSpecifiers within one alternative must be unique.
info: |
  It is a Syntax Error if |Pattern| contains two distinct |GroupSpecifier|s
  _x_ and _y_ for which CapturingGroupName(_x_) is the same as
  CapturingGroupName(_y_) and such that CanBothParticipate(_x_, _y_) is *true*.
esid: sec-patterns-static-semantics-early-errors
negative:
  phase: parse
  type: SyntaxError
features: [regexp-named-groups]
---*/

$DONOTEVALUATE();

/(?<a>a)(?<a>a)/u;
