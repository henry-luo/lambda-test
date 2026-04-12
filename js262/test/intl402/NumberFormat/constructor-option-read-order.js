

/*---
esid: sec-initializenumberformat
description: Checks the order of option read.
features: [Intl.NumberFormat-v3]
includes: [compareArray.js]
---*/

let optionKeys = [
    
    "localeMatcher",
    "numberingSystem",
    
        "style",
        "currency",
        "currencyDisplay",
        "currencySign",
        "unit",
        "unitDisplay",
    
    
    "notation",
    
        "minimumIntegerDigits",
        "minimumFractionDigits",
        "maximumFractionDigits",
        "minimumSignificantDigits",
        "maximumSignificantDigits",
        "roundingIncrement",
        "roundingMode",
        "roundingPriority",
        "trailingZeroDisplay",
    
    
    "compactDisplay",
    "useGrouping",
    "signDisplay"
];


let reads = new Array();
let options = {};
optionKeys.forEach((key) => {
    Object.defineProperty(options, key, {
        get() {
            reads.push(key);
            return undefined;
        },
    });
});
new Intl.NumberFormat(undefined, options);
assert.compareArray(reads, optionKeys, "Intl.NumberFormat options read order");
