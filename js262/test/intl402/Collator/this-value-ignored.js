

/*---
es5id: 10.1.1_1
description: Tests that the this-value is ignored in Collator.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

testWithIntlConstructors(function (Constructor) {
    var obj, newObj;

    
    obj = new Constructor();
    newObj = Intl.Collator.call(obj);
    assert.notSameValue(obj, newObj, "Collator object created with \"new\" was not ignored as this-value.");

    
    if (Constructor !== Intl.Collator &&
        Constructor !== Intl.NumberFormat &&
        Constructor !== Intl.DateTimeFormat)
    {
        
        return;
    }
    obj = Constructor();
    newObj = Intl.Collator.call(obj);
    assert.notSameValue(obj, newObj, "Collator object created with constructor as function was not ignored as this-value.");
});
