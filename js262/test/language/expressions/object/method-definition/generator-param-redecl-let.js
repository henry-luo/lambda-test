

/*---
info: |
 GeneratorMethod early SyntaxError when lexical declaration
 inside generator shadows parameter name
features: [generators]
es6id: 14.4.1
author: Sam Mikes
description: GeneratorMethod error with lexical shadowing
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var obj = {
    *foo(a) {
        let a = 3;
    }
};
