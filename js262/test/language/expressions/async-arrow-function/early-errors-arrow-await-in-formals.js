

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: It is a SyntaxError if FormalParameters contains await
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
async(await) => {  }
