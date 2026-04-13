

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
function base() { }

class beforeSwizzle extends base {
    constructor() {
        super(Object.setPrototypeOf(beforeSwizzle, null));
    }
}

new beforeSwizzle();

function MyError() {}


class beforeThrow extends base {
    constructor() {
        function thrower() { throw new MyError(); }
        super(thrower());
    }
}

Object.setPrototypeOf(beforeThrow, Math.sin);


assertThrowsInstanceOf(() => new beforeThrow(), MyError);

