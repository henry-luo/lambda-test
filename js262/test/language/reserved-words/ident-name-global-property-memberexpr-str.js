

/*---
es5id: 7.6.1-3-16
description: >
    Allow global constant properties as property names by index assignment.
---*/

var tokenCodes = {};

tokenCodes['undefined'] = 'undefined';
tokenCodes['NaN'] = 'NaN';
tokenCodes['Infinity'] = 'Infinity';

var arr = [
    'undefined',
    'NaN',
    'Infinity',
];

for (var i = 0; i < arr.length; ++i) {
    var propertyName = arr[i];

    assert(tokenCodes.hasOwnProperty(propertyName),
           'Property "' + propertyName + '" found');

    assert.sameValue(tokenCodes[propertyName], propertyName,
                     'Property "' + propertyName + '" has correct value');
}
