

/*---
author: Mathias Bynens
description: >
  Some binary properties used to be part of the Unicode property escapes
  proposal but were later removed. They must not be supported.
esid: sec-static-semantics-unicodematchproperty-p
negative:
  phase: parse
  type: SyntaxError
features: [regexp-unicode-property-escapes]
---*/

$DONOTEVALUATE();

/\P{Expands_On_NFKC}/u;
