

/*---
description: |
  async function toString
info: bugzilla.mozilla.org/show_bug.cgi?id=1185106
esid: pending
---*/

async function f1(a, b, c) { await a; }

assert.sameValue(f1.toString(),
         "async function f1(a, b, c) { await a; }");

assert.sameValue(async function (a, b, c) { await a; }.toString(),
         "async function (a, b, c) { await a; }");

assert.sameValue((async (a, b, c) => await a).toString(),
         "async (a, b, c) => await a");

assert.sameValue((async (a, b, c) => { await a; }).toString(),
         "async (a, b, c) => { await a; }");

assert.sameValue({ async foo(a, b, c) { await a; } }.foo.toString(),
         "async foo(a, b, c) { await a; }");
