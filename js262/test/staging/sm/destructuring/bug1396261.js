

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


[{a: 0}.x] = [];
[[0].x] = [];


[...{a: 0}.x] = [];
[...[0].x] = [];


({a: {b: 0}.x} = {});
({a: [0].x} = {});


({...{b: 0}.x} = {});
({...[0].x} = {});


assertThrowsInstanceOf(() => Function(`[{a = 0}.x] = [];`), SyntaxError);
assertThrowsInstanceOf(() => Function(`[...{a = 0}.x] = [];`), SyntaxError);
assertThrowsInstanceOf(() => Function(`({a: {b = 0}.x} = {});`), SyntaxError);
assertThrowsInstanceOf(() => Function(`({...{b = 0}.x} = {});`), SyntaxError);


(function() {
    "use strict";

    
    [{eval}.x] = [];
    [...{eval}.x] = [];
    ({a: {eval}.x} = {});
    ({...{eval}.x} = {});

    [{arguments}.x] = [];
    [...{arguments}.x] = [];
    ({a: {arguments}.x} = {});
    ({...{arguments}.x} = {});
})();

