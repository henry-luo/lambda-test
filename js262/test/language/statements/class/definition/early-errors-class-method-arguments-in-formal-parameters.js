

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: It is a SyntaxError if FormalParameters contains arguments
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
class Foo {
  async foo (arguments) { }
}
