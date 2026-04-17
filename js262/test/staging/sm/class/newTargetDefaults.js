

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


function check(expected, actual = new.target) { assert.sameValue(actual, expected); }
new check(check);
check(undefined);

let evaldCheck = eval("(" + check.toString() + ")");
new evaldCheck(evaldCheck);
evaldCheck(undefined);

function testInFunction() {
    function checkInFunction(expected, actual = new.target) { assert.sameValue(actual, expected); }
    new checkInFunction(checkInFunction);
    checkInFunction(undefined);

    let evaldCheckInFunction = eval("(" + checkInFunction.toString() + ")");
    new evaldCheckInFunction(evaldCheckInFunction);
    evaldCheckInFunction(undefined);
}

testInFunction();
new testInFunction();

