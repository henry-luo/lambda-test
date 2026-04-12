

/*---
esid: sec-createdatetimeformat
description: Checks the propagation of exceptions from the options for the DateTimeFormat constructor.
features: [Intl.DateTimeFormat-datetimestyle]
---*/


function CustomError() {}

const options = [
  
  "dateStyle",
  
  "timeStyle",
];

for (const option of options) {
  assert.throws(CustomError, () => {
    new Intl.DateTimeFormat("en", {
      get [option]() {
        throw new CustomError();
      }
    });
  }, `Exception from ${option} getter should be propagated`);
}
