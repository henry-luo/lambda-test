

/*---
esid: pending
description: >
    It is a Syntax Error if we declare a private instance setter and a static private getter
features: [class-static-methods-private, class-methods-private]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

class C {
  set #f(v) {}
  static get #f() {}
}

