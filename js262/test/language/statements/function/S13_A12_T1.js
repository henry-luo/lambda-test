

/*---
info: Function declarations in global or function scope are {DontDelete}
es5id: 13_A12_T1
description: >
    Checking if deleting a function that is declared in global scope
    fails
flags: [noStrict]
---*/

ALIVE="Letov is alive"

function __func(){
    return ALIVE;
};


if (delete __func) {
	throw new Test262Error('#1: delete __func returning false');
}


if (__func() !== ALIVE) {
	throw new Test262Error('#2: __func() === ALIVE. Actual: __func() ==='+__func());
}

