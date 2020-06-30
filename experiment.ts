import * as seq from "./common";
import * as dna from "dnaviz";
import * as ss from "simple-statistics";

const methods = [
  dna.squiggle,
  dna.yau,
  dna.yau_bp,
  dna.gates,
  dna.randic,
  dna.qi,
];

for (let i = 0; i < methods.length; i++) {
  let j = 0;
  const times_squ_6 = [];
  while (j < 1000) {
    let then = new Date();
    methods[i](seq.E_6);
    let now = new Date();
    times_squ_6.push((now.getTime() - then.getTime()) / 1000);
    j++;
  }

  console.log(methods[i].name + " 1,000,000 median: " + ss.median(times_squ_6) + "s");
  console.log(methods[i].name + " 1,000,000 mean: " + ss.mean(times_squ_6) + "s");
  console.log(
    methods[i].name + " 1,000,000 standard dev: " + ss.standardDeviation(times_squ_6) + "s"
  );
}

// let j = 0;
// const times_squ_5 = [];
// while (j < 1000) {
//   let then = new Date();
//   dna.squiggle(seq.E_5);
//   let now = new Date();
//   times_squ_5.push((now.getTime() - then.getTime()) / 1000);
//   j++
// }

// let i = 0;
// const times_squ_4 = [];
// while (i < 1000) {
//   let then = new Date();
//   dna.squiggle(seq.E_4);
//   let now = new Date();
//   times_squ_4.push((now.getTime() - then.getTime()) / 1000);
//   i++
// }
// let j = 0;
// const times_squ_5 = [];
// while (j < 1000) {
//   let then = new Date();
//   dna.squiggle(seq.E_5);
//   let now = new Date();
//   times_squ_5.push((now.getTime() - then.getTime()) / 1000);
//   j++
// }

// console.log('squiggle 100,000 median: ' + ss.median(times_squ_5) + 's')
// console.log('squiggle 100,000 mean: ' + ss.mean(times_squ_5) + 's')
// console.log('squiggle 100,000 standard dev: ' + ss.standardDeviation(times_squ_5) + 's')
// console.log('squiggle 10,000 median: ' + ss.median(times_squ_4) + 's')
// console.log('squiggle 10,000 mean: ' + ss.mean(times_squ_4) + 's')
// console.log('squiggle 10,000 standard dev: ' + ss.standardDeviation(times_squ_4) + 's')
// console.log('squiggle 100,000 median: ' + ss.median(times_squ_5) + 's')
// console.log('squiggle 100,000 mean: ' + ss.mean(times_squ_5) + 's')
// console.log('squiggle 100,000 standard dev: ' + ss.standardDeviation(times_squ_5) + 's')