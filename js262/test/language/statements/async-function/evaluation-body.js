

/*---
author: brian terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  async function bodies are executed immediately (unlike generators)
---*/

let called;
async function foo() {
  called = true;
  await new Promise();
}

foo();
assert(called);
