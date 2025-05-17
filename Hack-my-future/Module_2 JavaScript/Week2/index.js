"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < sampleSize; i++) {
    let randomValue = Math.floor(Math.random() * 6) + 1;
    valueCounts[randomValue - 1] += 1;
  }

  const results = [];
  for (let valueCount of valueCounts) {
    const sum = (valueCount / sampleSize) * 100;
    results.push(sum.toFixed(2));
  }
  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];
  for (let sample of sampleSizes) {
    const results = runExperiment(sample);
    console.log(results, sample);
  }
}

main();
