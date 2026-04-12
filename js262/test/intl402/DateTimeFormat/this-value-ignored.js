

/*---
esid: sec-intl-datetimeformat-constructor
description: >
    Tests that the this-value is ignored in DateTimeFormat, if the this-value
    isn't a DateTimeFormat instance.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

testWithIntlConstructors(function (Constructor) {
    if (Constructor === Intl.DateTimeFormat)
        return;

    var obj, newObj;

    
    obj = new Constructor();
    newObj = Intl.DateTimeFormat.call(obj);
    assert.notSameValue(obj, newObj, "DateTimeFormat object created with \"new\" was not ignored as this-value.");

    
    if (Constructor !== Intl.Collator &&
        Constructor !== Intl.NumberFormat &&
        Constructor !== Intl.DateTimeFormat)
    {
        
        return;
    }
    obj = Constructor();
    newObj = Intl.DateTimeFormat.call(obj);
    assert.notSameValue(obj, newObj, "DateTimeFormat object created with constructor as function was not ignored as this-value.");
});
