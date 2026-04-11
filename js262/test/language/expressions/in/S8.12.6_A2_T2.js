

/*---
info: |
    When the [[HasProperty]] method of O is called with property name P and if O has not a property with name P
    then If the [[Prototype]] of O is null, return false or call the [[HasProperty]] method of [[Prototype]] with property name P
es5id: 8.12.6_A2_T2
description: >
    Try find not existent property of any Object, but existent
    property of this Object prototype
---*/

var __proto={phylum:"avis"};


if (!("valueOf" in __proto)) {
  throw new Test262Error('#1: var __proto={phylum:"avis"}; "valueOf" in __proto');
}


function Robin(){this.name="robin"};
Robin.prototype=__proto;

var __my__robin = new Robin;


if (!("phylum" in __my__robin)) {
  throw new Test262Error('#2: var __proto={phylum:"avis"}; function Robin(){this.name="robin"}; Robin.prototype=__proto; var __my__robin = new Robin; "phylum" in __my__robin');
}


if (__my__robin.hasOwnProperty("phylum")) {
  throw new Test262Error('#3: var __proto={phylum:"avis"}; function Robin(){this.name="robin"}; Robin.prototype=__proto; var __my__robin = new Robin; __my__robin.hasOwnProperty("phylum") === false. Actual: ' + (__my__robin.hasOwnProperty("phylum")));
}

