

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: It is a SyntaxError if FormalParameters contains eval
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

async(eval) => {  }
