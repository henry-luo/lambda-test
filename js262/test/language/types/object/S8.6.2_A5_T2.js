

/*---
info: "[[Call]] executes code associated with the object"
es5id: 8.6.2_A5_T2
description: >
    Call function-property of object, property defined  as
    seat['move']=function(){position++}
---*/

this.position=0;
var seat = {};
seat['move']=function(){position++};


seat.move();
if (position !==1) {
  throw new Test262Error('#1: this.position=0; seat = {}; seat[\'move\']=function(){position++}; seat.move(); position === 1. Actual: ' + (position));
}


seat['move']();
if (position !==2) {
  throw new Test262Error('#2: this.position=0; seat = {}; seat[\'move\']=function(){position++}; seat.move(); seat[\'move\'](); position === 2. Actual: ' + (position));
}

