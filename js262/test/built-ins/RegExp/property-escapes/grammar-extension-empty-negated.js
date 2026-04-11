

/*---
author: Mathias Bynens
description: >
  This tests violations of the grammar starting here:

  CharacterClassEscape[U]::
    [+U] p{ UnicodePropertyValueExpression }
    [+U] P{ UnicodePropertyValueExpression }
esid: prod-CharacterClassEscape
negative:
  phase: parse
  type: SyntaxError
features: [regexp-unicode-property-escapes]
---*/

$DONOTEVALUATE();

/[\p{}]/u;
