

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  It is a Syntax Error if ContainsUseStrict of AsyncConciseBody is *true* and IsSimpleParameterList of ArrowParameters is *false*.
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

async function foo(x = 1){"use strict"}
