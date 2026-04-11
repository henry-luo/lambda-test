

/*---
es5id: 10.1.2_a
description: Tests that Intl.Collator can be subclassed.
author: Norbert Lindenberg
includes: [compareArray.js]
---*/


var locales = ["tlh", "id", "en"];
var a = ["A", "C", "E", "B", "D", "F"];
var referenceCollator = new Intl.Collator(locales);
var referenceSorted = a.slice().sort(referenceCollator.compare);

class MyCollator extends Intl.Collator {
  constructor(locales, options) {
    super(locales, options);
    
  }
  
}

var collator = new MyCollator(locales);
a.sort(collator.compare);
assert.compareArray(a, referenceSorted);
