

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
class base { constructor() { } }


function lies() { }
lies.prototype = 4;

assertThrowsInstanceOf(()=>Reflect.consruct(base, [], lies), TypeError);


function get(target, property, receiver) {
    if (property === "prototype")
        return 42;
    return Reflect.get(target, property, receiver);
}

class inst extends base {
    constructor() { super(); }
}
assertThrowsInstanceOf(()=>new new Proxy(inst, {get})(), TypeError);

class defaultInst extends base {}
assertThrowsInstanceOf(()=>new new Proxy(defaultInst, {get})(), TypeError);

