

/*---
es5id: 8.12.5-3-b_1
description: >
    Changing the value of a data property should not affect it's
    non-value property descriptor attributes.
---*/

    var origDesc = Object.getOwnPropertyDescriptor(Array.prototype, "reduce");
    var newDesc;

        Array.prototype.reduce = function () {;};
        newDesc = Object.getOwnPropertyDescriptor(Array.prototype, "reduce");
        var descArray = [origDesc, newDesc];
        
        for (var j in descArray) {  
            for (var i in descArray[j]) {
                if (i==="value") {
                    assert.notSameValue(origDesc[i], newDesc[i], 'origDesc[i]');
                }
                else {
                    assert.sameValue(origDesc[i], newDesc[i], 'origDesc[i]');
                }
            }
        }
