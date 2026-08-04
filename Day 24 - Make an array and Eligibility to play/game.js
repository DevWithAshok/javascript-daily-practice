"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  // person
  let person = JSON.parse(readLine().replace(/'/g, '"'));

  function isEligibleForNextLevel(person) {
      let value=false;
    if (person["score"]>5){
        value=true
    }
    else{
        value=value;
    }
    return value;
  }

  let isPersonEligible = isEligibleForNextLevel(person);
  console.log(isPersonEligible);
}
