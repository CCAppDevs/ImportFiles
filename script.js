// import individual objects
import { sayHi, person, list, nums } from './library.js';

// the other way
// import * from './library.js';

// export const nums = [ 1, 2, 3, 3, 3, 4 ];
let counts = {};

for (let i = 0; i < nums.length; i++) {
    counts[nums[i]] = counts[nums[i]] + 1;
}

console.log(counts);

// output example
/* 
0: 0
1: 1
2: 1
3: 3
4: 1
*/