

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

class X {
    static count() { return ++this.hits; }
    constructor() { }
}
X.hits = 0;
assert.sameValue(X.count(), 1);


assert.sameValue(X.count instanceof Function, true);
assert.sameValue(X.count.length, 0);
assert.sameValue(X.count.bind({hits: 77})(), 78);

