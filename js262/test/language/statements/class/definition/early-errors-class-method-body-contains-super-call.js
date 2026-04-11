

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: It is a SyntaxError if AsyncFunctionBody contains SuperCall is true
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
class Foo {
  async foo () { super() }
}
