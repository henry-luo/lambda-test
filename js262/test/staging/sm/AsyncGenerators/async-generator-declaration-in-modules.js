

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
async function* f() {
    return "success";
}

var AsyncGenerator = (async function*(){}).constructor;

assert.sameValue(f instanceof AsyncGenerator, true);

f().next().then(v => {
    assert.sameValue("success", v.value);
});
