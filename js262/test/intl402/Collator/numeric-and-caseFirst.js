

/*---
es5id: 10.1.1_19_c
description: >
    Tests that the options numeric and caseFirst can be  set through
    either the locale or the options.
author: Norbert Lindenberg
---*/

var options = [
    {key: "kn", property: "numeric", type: "boolean", values: [true, false]},
    {key: "kf", property: "caseFirst", type: "string", values: ["upper", "lower", "false"]}
];

options.forEach(function (option) {
    var defaultLocale = new Intl.Collator().resolvedOptions().locale;
    var collator, opt, result;
    
    
    var supportedValues = [];
    option.values.forEach(function (value) {
        opt = {};
        opt[option.property] = value;
        collator = new Intl.Collator([defaultLocale], opt);
        result = collator.resolvedOptions()[option.property];
        if (result !== undefined && supportedValues.indexOf(result) === -1) {
            supportedValues.push(result);
        }
    });
    
    
    supportedValues.forEach(function (value) {
        collator = new Intl.Collator([defaultLocale + "-u-" + option.key + "-" + value]);
        result = collator.resolvedOptions()[option.property];
        assert.sameValue(result, value, "Property " + option.property + " couldn't be set through locale extension key " + option.key + ".");
    });
    
    
    supportedValues.forEach(function (value) {
        var otherValue;
        option.values.forEach(function (possibleValue) {
            if (possibleValue !== value) {
                otherValue = possibleValue;
            }
        });
        if (otherValue !== undefined) {
            opt = {};
            opt[option.property] = value;
            collator = new Intl.Collator([defaultLocale + "-u-" + option.key + "-" + otherValue], opt);
            result = collator.resolvedOptions()[option.property];
            assert.sameValue(result, value, "Options value for property " + option.property + " doesn't override locale extension key " + option.key + ".");
        }
    });
});
