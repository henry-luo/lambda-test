

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


const array = new Array(0);


for (let invalidComparator of [null, 0, true, Symbol(), {}, []]) {
    assertThrowsInstanceOf(() => array.sort(invalidComparator), TypeError);
}


for (let validComparator of [undefined, () => {}, Math.max, class {}, new Proxy(function(){}, {})]) {
    array.sort(validComparator);
}


array.sort();

