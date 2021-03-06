import * as dna from "dnaviz";
import * as ss from "simple-statistics";
function randomSeq(length) {
  var result = '';
  var characters = 'ATGC';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const E_4 = randomSeq(10000)
const E_5 = randomSeq(100000)
const E_6 = randomSeq(1000000)
// array of all visualization methods so each test can iterate over each
const methods = [
  dna.squiggle,
  dna.yau,
  dna.yau_bp,
  dna.gates,
  dna.randic,
  dna.qi,
];

// tests 1000 times for each method
for (let i = 0; i < methods.length; i++) {
  let j = 0;
  const times_squ_4 = [];
  while (j < 1000) {
    let then = new Date();
    methods[i](E_4);
    let now = new Date();
    times_squ_4.push((now.getTime() - then.getTime()) / 1000);
    j++;
  }

  console.log(methods[i].name + " 10,000 median: " + ss.median(times_squ_4) + "s");
  console.log(methods[i].name + " 10,000 mean: " + ss.mean(times_squ_4) + "s");
  console.log(
    methods[i].name + " 10,000 standard dev: " + ss.standardDeviation(times_squ_4) + "s"
  );
}

for (let i = 0; i < methods.length; i++) {
  let j = 0;
  const times_squ_5 = [];
  while (j < 1000) {
    let then = new Date();
    methods[i](E_5);
    let now = new Date();
    times_squ_5.push((now.getTime() - then.getTime()) / 1000);
    j++;
  }

  console.log(methods[i].name + " 100,000 median: " + ss.median(times_squ_5) + "s");
  console.log(methods[i].name + " 100,000 mean: " + ss.mean(times_squ_5) + "s");
  console.log(
    methods[i].name + " 100,000 standard dev: " + ss.standardDeviation(times_squ_5) + "s"
  );
}

for (let i = 0; i < methods.length; i++) {
  let j = 0;
  const times_squ_6 = [];
  while (j < 1000) {
    let then = new Date();
    methods[i](E_6);
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
