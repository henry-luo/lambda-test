

/*---
author: Mathias Bynens
description: >
  Properties not explicitly listed in the Unicode property escapes spec must
  not be supported.
esid: sec-static-semantics-unicodematchproperty-p
negative:
  phase: parse
  type: SyntaxError
features: [regexp-unicode-property-escapes]
---*/

$DONOTEVALUATE();

/\P{Block=Adlam}/u;
