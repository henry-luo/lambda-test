

/*---
info: |
    Delete operator deletes pure property, so it returns true to be applyed
    to this.property
es5id: 8.7.1_A1
description: Try to delete this.y, where y is this.y=1
---*/

this.y = 1;


if((delete this.y) !== true){
  throw new Test262Error('#1: this.y = 1; (delete this.y) === true. Actual: ' + ((delete this.y)));
};


if (this.y !== undefined){
  throw new Test262Error('#2: this.y = 1; (delete this.y) === true; this.y === undefined. Actual: ' + (this.y));
}

