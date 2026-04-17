

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

class testNonExistent {
    constructor() {
        super["prop"]();
    }
}

assertThrownErrorContains(() => new testNonExistent(), 'super.prop');

var ol = { testNonExistent() { super.prop(); } };
assertThrownErrorContains(() => ol.testNonExistent(), "super.prop");

var olElem = { testNonExistent() { var prop = "prop"; super[prop](); } };
assertThrownErrorContains(() => olElem.testNonExistent(), "super[prop]");

