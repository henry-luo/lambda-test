

/*---
esid: sec-prepareforordinarycall
description: >
    Creation of new variable environment for the function parameters and body
    (as distinct from that for the function's BindingIdentifier)
info: |
    [...]
    3. Let callerContext be the running execution context.
    4. Let calleeContext be PrepareForOrdinaryCall(F, undefined).
    [...]

    9.2.1.1 PrepareForOrdinaryCall

    [...]
    8. Let localEnv be NewFunctionEnvironment(F, newTarget).
    9. Set the LexicalEnvironment of calleeContext to localEnv.
    10. Set the VariableEnvironment of calleeContext to localEnv.
    [...]
---*/

var n = 'outside';
var probeBefore = function() { return n; };
var probeBody;


var func = function n() {
  
  
  var n;
  probeBody = function() { return n; };
};

func();

assert.sameValue(probeBefore(), 'outside');
assert.sameValue(probeBody(), undefined);
