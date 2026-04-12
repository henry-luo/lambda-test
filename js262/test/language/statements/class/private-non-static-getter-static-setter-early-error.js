

/*---
esid: pending
description: >
    It is a Syntax Error if we declare a private instance getter and private static setter
features: [class-static-methods-private, class-methods-private]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

class C {
  get #f() {}
  static set #f(v) {}
}

