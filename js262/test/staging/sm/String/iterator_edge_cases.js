

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-String-shell.js, deepEqual.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


function TestStringIteratorPrototypeConfusion() {
    var iter = ""[Symbol.iterator]();
    assertThrowsInstanceOfWithMessage(
        () => iter.next.call(Object.getPrototypeOf(iter)),
        TypeError,
        "next method called on incompatible String Iterator");
}
TestStringIteratorPrototypeConfusion();


function TestStringIteratorWrappers() {
    var iter = ""[Symbol.iterator]();
    assert.deepEqual(iter.next.call(createNewGlobal().eval('"x"[Symbol.iterator]()')),
		 { value: "x", done: false })
}
if (typeof createNewGlobal === "function") {
    TestStringIteratorWrappers();
}

