

/*---
info: NaN is not a keyword
es5id: 8.5_A4
description: Create variable entitled NaN
flags: [noStrict]
---*/

var NaN=1.0;
NaN='asdf';
NaN=true;
NaN=Number.NaN;
