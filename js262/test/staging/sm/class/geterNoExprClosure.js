

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


assertThrowsInstanceOf(() => eval(`
  class foo {
    constructor() {}

    get a() 1
  }
`), SyntaxError);

assertThrowsInstanceOf(() => eval(`
  class foo {
    constructor() {}

    set a(v) 1
  }
`), SyntaxError);

