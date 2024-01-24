// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(" ");
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function min(arr, toReturn) {
  return toReturn === "value"
    ? Math.min(...arr)
    : arr.indexOf(Math.min(...arr));
}

// Advanced tasks
// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
  return queue[queue.length - 1] === "wolf"
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${
        queue.length - 1 - queue.indexOf("wolf")
      }! You are about to be eaten by a wolf!`;
}

// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
function maps(x) {
  return x.map((value) => value * 2);
}

// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      return arr[i + 1];
    }
  }
  return null;
}

// Additional tasks
// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
  return i * 2;
}

// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
function century(year) {
  return Math.ceil(year / 100);
}

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  return -Math.abs(num);
}

// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
function cockroachSpeed(s) {
  return Math.floor((s * 100000) / 3600);
}

// https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
function otherAngle(a, b) {
  return 180 - a - b;
}

// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return sonYearsOld * 2 < dadYearsOld
    ? dadYearsOld - sonYearsOld * 2
    : sonYearsOld * 2 - dadYearsOld;
}

// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n) {
  return 2 * n - 2;
}

// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
  return n > 0 ? (n > 13 ? n - 2 : n - 1) : n;
}

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s) {
  return (s + m * 60 + h * 3600) * 1000;
}

// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}
