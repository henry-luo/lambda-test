

/*---
info: The undefined is DontDelete
esid: sec-undefined
description: Use delete
flags: [noStrict]
---*/


if (delete undefined !== false) {
  throw new Test262Error('#1: delete undefined === false. Actual: ' + (delete undefined));
}
