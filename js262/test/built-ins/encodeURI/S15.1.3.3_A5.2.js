

/*---
info: The length property of encodeURI does not have the attribute DontDelete
esid: sec-encodeuri-uri
description: Checking use hasOwnProperty, delete
---*/


if (encodeURI.hasOwnProperty('length') !== true) {
  throw new Test262Error('#1: encodeURI.hasOwnProperty(\'length\') === true. Actual: ' + (encodeURI.hasOwnProperty('length')));
}

delete encodeURI.length;


if (encodeURI.hasOwnProperty('length') !== false) {
  throw new Test262Error('#2: delete encodeURI.length; encodeURI.hasOwnProperty(\'length\') === false. Actual: ' + (encodeURI.hasOwnProperty('length')));
}


if (encodeURI.length === undefined) {
  throw new Test262Error('#3: delete encodeURI.length; encodeURI.length !== undefined');
}
