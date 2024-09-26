// Function to reverse anything you throw at it
// Can do that with strings, numbers and arrays

let input = prompt("Enter your data");

// Check if input can be considered as array

console.log(input);

console.log(input.charAt(0));

console.log(input.charAt(input.length - 1));

console.log(input.split(","));

let inputArray = [];
let reverse = [];

if (input.charAt(0) == "[" && input.charAt(input.length - 1) == "]") {
  input = input.slice(1, -1);
  inputArray = input.split(",");
  for (i = inputArray.length - 1; i >= 0; i--) {
    reverse.push(inputArray[i]);
  }
}

// What to do if input is not considered as an array
else {
  input = input.toString();
  reverse = reverse.toString();
  for (i = input.length - 1; i >= 0; i--) {
    reverse += input.charAt(i);
  }
}
console.log(reverse);
