

/*---
esid: pending
description: >
    It is a Syntax Error if we declare a static private setter and a private instance getter
features: [class-static-methods-private, class-methods-private]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

class C {
  static set #f(v) {}
  get #f() {}
}

