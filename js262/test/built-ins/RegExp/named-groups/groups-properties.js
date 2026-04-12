

/*---
description: Properties of the groups object are created with CreateDataProperty
includes: [compareArray.js, propertyHelper.js]
esid: sec-regexpbuiltinexec
features: [regexp-named-groups]
info: |
  Runtime Semantics: RegExpBuiltinExec ( R, S )
    25. For each integer i such that i > 0 and i ≤ n
      f. If the ith capture of R was defined with a GroupName,
        i. Let s be the StringValue of the corresponding RegExpIdentifierName.
        ii. Perform ! CreateDataProperty(groups, s, capturedValue).
---*/


assert.compareArray(["fst", "snd"], Object.getOwnPropertyNames(
    /(?<fst>.)|(?<snd>.)/u.exec("abcd").groups));


let counter = 0;
Object.defineProperty(Object.prototype, 'x', {set() { counter++; }});
let match = /(?<x>.)/.exec('a');
let groups = match.groups;
assert.sameValue(counter, 0);


verifyProperty(groups, "x", {
  writable: true,
  enumerable: true,
  configurable: true,
});
