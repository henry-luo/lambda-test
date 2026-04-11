

/*---
es5id: 7.6.1-1-1
description: >
    Allow reserved words as property names at object initialization.
---*/

var tokenCodes = {
    null: 'null',
    true: 'true',
    false: 'false',
};

var arr = [
    'null',
    'true',
    'false',
];

for (var i = 0; i < arr.length; ++i) {
    var propertyName = arr[i];

    assert(tokenCodes.hasOwnProperty(propertyName),
           'Property "' + propertyName + '" found');

    assert.sameValue(tokenCodes[propertyName], propertyName,
                     'Property "' + propertyName + '" has correct value');
}
