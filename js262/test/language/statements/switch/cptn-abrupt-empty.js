

/*---
es6id: 13.12.11
description: >
    Completion value when case block is empty
info: |
    SwitchStatement : switch ( Expression ) CaseBlock

    [...]
    8. Let R be the result of performing CaseBlockEvaluation of CaseBlock with
       argument switchValue.
    9. Set the running execution context’s LexicalEnvironment to oldEnv.
    10. Return R.


    13.12.9 Runtime Semantics: CaseBlockEvaluation

    CaseBlock : { }

    1. Return NormalCompletion(undefined).
---*/

assert.sameValue(eval('1; switch(null) {}'), undefined);
