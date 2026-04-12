

/*---
es6id: 25.2.4.2
description: >
    Whenever a GeneratorFunction instance is created another ordinary object is
    also created and is the initial value of the generator function’s prototype
    property.
features: [generators]
---*/

assert.sameValue(typeof function*() {}.prototype, 'object');
