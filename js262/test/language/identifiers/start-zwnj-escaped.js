

/*---
author: Adam Kluball
esid: sec-names-and-keywords
description: zero width non-joiner is not a valid identifier start
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var \u200C;
