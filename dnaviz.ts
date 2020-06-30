import * as seq from "./common";
import * as dna from "dnaviz";
import * as ss from "simple-statistics";

let i = 0;
const times_squ_4 = [];
while (i < 1000) {
  let then = new Date();
  dna.squiggle(seq.E_4);
  let now = new Date();
  times_squ_4.push((now.getTime() - then.getTime()) / 1000);
  i++
}

console.log('squiggle 10,000 median: ' + ss.median(times_squ_4) + 's')
console.log('squiggle 10,000 mean: ' + ss.mean(times_squ_4) + 's')
console.log('squiggle 10,000 standard dev: ' + ss.standardDeviation(times_squ_4) + 's')

let j = 0;
const times_squ_5 = [];
while (j < 1000) {
  let then = new Date();
  dna.squiggle(seq.E_5);
  let now = new Date();
  times_squ_5.push((now.getTime() - then.getTime()) / 1000);
  j++
}

console.log('squiggle 100,000 median: ' + ss.median(times_squ_5) + 's')
console.log('squiggle 100,000 mean: ' + ss.mean(times_squ_5) + 's')
console.log('squiggle 100,000 standard dev: ' + ss.standardDeviation(times_squ_5) + 's')

let k = 0;
const times_squ_6 = [];
while (k < 1000) {
  let then = new Date();
  dna.squiggle(seq.E_6);
  let now = new Date();
  times_squ_6.push((now.getTime() - then.getTime()) / 1000);
  k++
}

console.log('squiggle 1,000,000 median: ' + ss.median(times_squ_6) + 's')
console.log('squiggle 1,000,000 mean: ' + ss.mean(times_squ_6) + 's')
console.log('squiggle 1,000,000 standard dev: ' + ss.standardDeviation(times_squ_6) + 's')

// squiggle 10,000 median: 0.001s
// squiggle 10,000 mean: 0.0006590000000000001s
// squiggle 10,000 standard dev: 0.0007380508112589583s
// squiggle 100,000 median: 0.01s
// squiggle 100,000 mean: 0.010613s
// squiggle 100,000 standard dev: 0.002444019435274594s
// squiggle 1,000,000 median: 0.084s
// squiggle 1,000,000 mean: 0.089395s
// squiggle 1,000,000 standard dev: 0.015445613454958665s