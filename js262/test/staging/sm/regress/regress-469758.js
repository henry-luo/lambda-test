

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
assertThrowsInstanceOfWithMessageCheck(
    () => {
      {let i=1}
      {let j=1; [][j][2]}
    },
    TypeError,
    message => message.endsWith("[][j] is undefined"));

