

/*---
es5id: 12.10.1-10-s
description: >
    with statement in strict mode throws SyntaxError (eval, where the
    container function is strict)
flags: [onlyStrict]
---*/

  
assert.throws(SyntaxError, function() {
    eval("\
          var o = {};\
          with (o) {}\
       ");
});
