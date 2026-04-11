

/*---
description: import() from a script code can load a file with module code (nested in async arrow function, returned)
esid: sec-import-call-runtime-semantics-evaluation
features: [dynamic-import]
flags: [generated, async]
info: |
    ImportCall :
        import( AssignmentExpression )

    1. Let referencingScriptOrModule be ! GetActiveScriptOrModule().
    2. Assert: referencingScriptOrModule is a Script Record or Module Record (i.e. is not null).
    3. Let argRef be the result of evaluating AssignmentExpression.
    4. Let specifier be ? GetValue(argRef).
    5. Let promiseCapability be ! NewPromiseCapability(%Promise%).
    6. Let specifierString be ToString(specifier).
    7. IfAbruptRejectPromise(specifierString, promiseCapability).
    8. Perform ! HostImportModuleDynamically(referencingScriptOrModule, specifierString, promiseCapability).
    9. Return promiseCapability.[[Promise]].

---*/


var smoosh; function smoosh() {}


const f = async () => await import('./module-code_FIXTURE.js');

f().then(imported => {

  assert.sameValue(imported.default, 42);
  assert.sameValue(imported.x, 'Test262');
  assert.sameValue(imported.z, 42);

}).then($DONE, $DONE).catch($DONE);
