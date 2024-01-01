/**
 * Multi Dimension Array
 */
/**
 * (1)
 * [1,2,3]
 *
 * (2)
 * [
 * [1,2,3],[1,2,3]
 * ]
 *
 * (3)
 * [
 * [
 * [1,2,3]
 * ]
 * ]
 *  */

const numb2DArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

const str2DArr: string[][] = [
  ["1", "2", "3"],
  ["4", "5", "6"],
];

const strAndNumbArr: (number | string)[][] = [
  ["1", 2, 3],
  [1, "2", "5"],
];

let strArrNumbArr: string[][] | number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
strArrNumbArr = [
  ["1", "2", "3"],
  ["4", "5", "6"],
];

for (let arr of numb2DArr) {
  for (let item of arr) {
  }
}
