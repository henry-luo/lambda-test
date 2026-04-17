

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-RegExp-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
(function() {
    var rx = /a/g;
    var b = {
        get a() {
            rx.compile("b");
            return "A";
        }
    };

    
    function replacer(a) {
        return b[a];
    }

    var result = rx[Symbol.replace]("aaa", replacer);

    assert.sameValue(result, "AAA");
})();

