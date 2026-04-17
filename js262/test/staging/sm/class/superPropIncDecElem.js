

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

function base() { }

base.prototype = {
    test() {
        --super[1];
    }
}

var d = new base();
d.test();


class test2 {
    test() {
        super[1]++;
    }
}

var d = new test2();
d.test()

