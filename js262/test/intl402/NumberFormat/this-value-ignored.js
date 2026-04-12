

/*---
esid: sec-intl-numberformat-constructor
description: >
    Tests that the this-value is ignored in NumberFormat, if the this-value
    isn't a NumberFormat instance.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

testWithIntlConstructors(function (Constructor) {
    if (Constructor === Intl.NumberFormat)
        return;

    var obj, newObj;

    
    obj = new Constructor();
    newObj = Intl.NumberFormat.call(obj);
    assert.notSameValue(obj, newObj, "NumberFormat object created with \"new\" was not ignored as this-value.");

    
    if (Constructor !== Intl.Collator &&
        Constructor !== Intl.NumberFormat &&
        Constructor !== Intl.DateTimeFormat)
    {
        
        return;
    }
    obj = Constructor();
    newObj = Intl.NumberFormat.call(obj);
    assert.notSameValue(obj, newObj, "NumberFormat object created with constructor as function was not ignored as this-value.");
});
