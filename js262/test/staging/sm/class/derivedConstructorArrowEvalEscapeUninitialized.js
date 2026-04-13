

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
let superArrow;
let thisArrow;

let thisStash;

class base {
    constructor() {
        
        if (!thisStash)
            thisStash = {prop:45};
        return thisStash;
    }
}

class foo extends base {
    constructor() {
        superArrow = (()=>super());
        thisArrow = ()=>this;
    }
}


assertThrowsInstanceOf(()=>new foo(), ReferenceError);


assertThrowsInstanceOf(thisArrow, ReferenceError);


superArrow();


assertThrowsInstanceOf(superArrow, ReferenceError);


assert.sameValue(thisArrow(), thisStash);

