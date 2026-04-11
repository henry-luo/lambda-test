

/*---
esid: pending
description: >
    It is a Syntax Error if we declare a private static getter and a private instance setter
features: [class-static-methods-private, class-methods-private]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

class C {
  static get #f() {}
  set #f(v) {}
}

