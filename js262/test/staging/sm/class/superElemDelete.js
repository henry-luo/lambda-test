

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


class base {
    constructor() { }
}

class derived extends base {
    constructor() { super(); }
    testDeleteElem() {
        let sideEffect = 0;
        let key = {
            toString() {
                sideEffect++;
                return "";
            }
        };
        assertThrowsInstanceOf(() => delete super[key], ReferenceError);
        assert.sameValue(sideEffect, 0);
    }
}

class derivedTestDeleteElem extends base {
    constructor() {
        let sideEffect = 0;
        let key = {
            toString() {
                sideEffect++;
                return "";
            }
        };

        assertThrowsInstanceOf(() => delete super[key], ReferenceError);
        assert.sameValue(sideEffect, 0);

        super();

        assertThrowsInstanceOf(() => delete super[key], ReferenceError);
        assert.sameValue(sideEffect, 0);

        Object.setPrototypeOf(derivedTestDeleteElem.prototype, null);

        assertThrowsInstanceOf(() => delete super[key], ReferenceError);
        assert.sameValue(sideEffect, 0);

        return {};
    }
}

var d = new derived();
d.testDeleteElem();

new derivedTestDeleteElem();

