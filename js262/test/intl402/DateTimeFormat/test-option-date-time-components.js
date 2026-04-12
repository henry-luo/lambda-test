

/*---
es5id: 12.1.1_23
description: >
    Tests that the options for the date and time components are
    processed correctly.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

getDateTimeComponents().forEach(function (component) {
    testOption(Intl.DateTimeFormat, component, "string", getDateTimeComponentValues(component), undefined, {isILD: true});
});
