

/*---
esid: sec-functiondeclarationinstantiation
description: >
    Disposal of variable environment for the function body
info: |
    [...]
    26. If hasParameterExpressions is false, then
        [...]
    27. Else,
        a. NOTE A separate Environment Record is needed to ensure that closures
           created by expressions in the formal parameter list do not have
           visibility of declarations in the function body.
        b. Let varEnv be NewDeclarativeEnvironment(env).
        c. Let varEnvRec be varEnv's EnvironmentRecord.
        d. Set the VariableEnvironment of calleeContext to varEnv.
        e. Let instantiatedVarNames be a new empty List.
        [...]
features: [generators]
---*/

var probe;

class C {
  
  
  *m(_ = null) {
    var x = 'inside';
    probe = function() { return x; };
  }
}
C.prototype.m().next();

var x = 'outside';

assert.sameValue(probe(), 'inside');
assert.sameValue(x, 'outside');
