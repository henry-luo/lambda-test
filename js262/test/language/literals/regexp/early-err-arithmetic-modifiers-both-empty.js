

/*---
description: It is a Syntax Error if the source text matched by the first RegularExpressionFlags and the source text matched by the second RegularExpressionFlags are both empty. (arithmetic regular expression flags)
esid: sec-patterns-static-semantics-early-errors
features: [regexp-modifiers]
negative:
  phase: parse
  type: SyntaxError
info: |
    Atom :: ( ? RegularExpressionFlags - RegularExpressionFlags : Disjunction )
    ...

---*/

$DONOTEVALUATE();

/(?-:a)/;
