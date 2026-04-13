

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-TypedArray-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


const typedArray = new Int32Array(0);


for (let invalidComparator of [null, 0, true, Symbol(), {}, []]) {
    assertThrowsInstanceOf(() => typedArray.sort(invalidComparator), TypeError);
}


for (let validComparator of [undefined, () => {}, Math.max, class {}, new Proxy(function(){}, {})]) {
    typedArray.sort(validComparator);
}


typedArray.sort();

