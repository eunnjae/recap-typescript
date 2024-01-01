/**
 * Problems with Array in JS
 */
const numbers = [1, "2", "3", 4, 5];

let strings: string[] = ["1", "2", "3"];

// strings.push(1);

let stringsOrNumbersArray: (string | number)[] = [1, "2", 3, "4", 5];

let stringArrNumberArr: string[] | number[] = [1, 2, 3];
stringArrNumberArr = ["5", "6", "7"];

let stringOrNumberArr: string | number[] = [1, 2, 3];

stringOrNumberArr = "122334";

let boolsArr = [true, false, true];

boolsArr.push(false);

// boolsArr.push(1);

const onlyStrings = ["1", "2", "3"];
const onlyNumbers = [1, 2, 3];

for (let i = 0; i < onlyStrings.length; i++) {
  let item = onlyStrings[i];
}

for (let item of onlyNumbers) {
}

let number3 = onlyNumbers[0];

let number4 = onlyNumbers[9999];
// typescript basically doesn't bother the length of the index if it's not a tuple.
