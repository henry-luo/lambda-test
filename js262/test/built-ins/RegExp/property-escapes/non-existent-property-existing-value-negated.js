

/*---
author: Mathias Bynens
description: >
  Non-existent properties must not be supported in Unicode property escapes.
esid: sec-static-semantics-unicodematchproperty-p
negative:
  phase: parse
  type: SyntaxError
features: [regexp-unicode-property-escapes]
---*/

$DONOTEVALUATE();

/\P{Line_Breakz=Alphabetic}/u;
