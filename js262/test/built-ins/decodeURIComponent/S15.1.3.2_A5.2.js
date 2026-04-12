

/*---
info: |
    The length property of decodeURIComponent does not have the attribute
    DontDelete
esid: sec-decodeuricomponent-encodeduricomponent
description: Checking use hasOwnProperty, delete
---*/


if (decodeURIComponent.hasOwnProperty('length') !== true) {
  throw new Test262Error('#1: decodeURIComponent.hasOwnProperty(\'length\') === true. Actual: ' + (decodeURIComponent.hasOwnProperty('length')));
}

delete decodeURIComponent.length;


if (decodeURIComponent.hasOwnProperty('length') !== false) {
  throw new Test262Error('#2: delete decodeURIComponent.length; decodeURIComponent.hasOwnProperty(\'length\') === false. Actual: ' + (decodeURIComponent.hasOwnProperty('length')));
}


if (decodeURIComponent.length === undefined) {
  throw new Test262Error('#3: delete decodeURIComponent.length; decodeURIComponent.length !== undefined');
}
