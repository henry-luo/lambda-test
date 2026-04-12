

/*---
info: |
    The value of the internal [[Prototype]] property of the Date
    constructor is the Function prototype object
esid: sec-date-constructor
description: Checking Function.prototype.isPrototypeOf(Date)
---*/
assert(Function.prototype.isPrototypeOf(Date), 'Function.prototype.isPrototypeOf(Date) must return true');
