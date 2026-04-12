

/*---
esid: prod-OptionalExpression
description: >
  template string passed to tail position of optional chain
info: |
  Static Semantics: Early Errors
    OptionalChain:
      ?.TemplateLiteral
      OptionalChain TemplateLiteral

  It is a Syntax Error if any code matches this production.
features: [optional-chaining]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


null?.fn
  `hello`
