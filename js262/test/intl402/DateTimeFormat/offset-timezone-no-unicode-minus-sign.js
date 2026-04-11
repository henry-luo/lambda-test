

/*---
esid: sec-createdatetimeformat
description: >
  A valid offset time zone identifier may not include U+2212 MINUS SIGN
---*/


const invalidIDs = [
  '−0900',
  '−10:00',
  '−05',
];
invalidIDs.forEach((id) => {
  assert.throws(RangeError, () => new Intl.DateTimeFormat("en", { timeZone: id }));
});
