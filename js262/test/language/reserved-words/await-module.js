

/*---
esid: sec-reserved-words
es6id: 11.6.2
description: The `await` token is not permitted as an identifier in module code
flags: [module]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var await;
