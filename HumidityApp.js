// Basic thing. We need to find Humidity aplitude in an array
// In array can be 'errors', so need to take care

// Let's start with given array

let humidities = [32, 45, 29, 19, 'error', 58, 71, 47, 33, 42, 51, 49];

// Humidity aplitude is a difference between max and min values, so we need to find them in an array
// Since humidity is a value between 0 and 100, we could just implement min as 100 and max as 0 as default values to compare them with first valid element in an array, but let's build more universal version of this algorithm to use it in a future apps

console.log(humidities);

// Search for the first valid argument

let min;
let max;
let firstValidIndex;
for (i = 0; i < humidities.length; i++) {
  if (isNaN(humidities[i])) {
    continue;
  } else {
    min = max = humidities[i];
    firstValidIndex = i;
    break;
  }
}
console.log(min);
console.log(max);
for (i = firstValidIndex; i < humidities.length; i++) {
  if (isNaN(humidities[i])) {
    continue;
  } else {
    if (humidities[i] < min) {
      min = humidities[i];
    }
    if (humidities[i] > max) {
      max = humidities[i];
    }
  }
}
console.log(`minimum value is: ${min}`);
console.log(`maximum value is: ${max}`);
console.log(`humidity amplitude is ${max - min}`);

// And when I found out about number.POSITIVE_INFINITY, it's possible to do that using only one loop and 1 less variable
// parseInt before isNaN is still important, because isNaN('') return false and bugging this loop, but parseInt('') return NaN
// So it's important in case, when array contain empty strings

// let min = Number.POSITIVE_INFINITY;
// let max = Number.NEGATIVE_INFINITY;
// for (i = 0; i < humidities.length; i++) {
//   let token = parseInt(humidities[i]);
//   if (isNaN(token)) {
//     continue;
//   } else {
//     if (token < min) {
//       min = token;
//     }
//     if (token > max) {
//       max = token;
//     }
//   }
// }
// console.log(`minimum value is: ${min}`);
// console.log(`maximum value is: ${max}`);
// console.log(`humidity amplitude is ${max - min}`);
