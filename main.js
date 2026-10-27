// Store the human age to convert.
const myAge = 48;
// Start with the first two years of a dog's life.
let earlyYears = 2;
// Convert the first two dog years to human years.
earlyYears *= 10.5;
console.log('⚡earlyYears >>', earlyYears);
// Calculate the remaining years after the first two.
let laterYears = myAge - 2;
// Convert the remaining years to dog years.
laterYears *= 4;
console.log('⚡laterYears >>', laterYears);
// Add both parts to get the human age in dog years.
const myAgeInDogYears = earlyYears + laterYears;
// Normalize the name to lowercase.
const myName = 'Doug'.toLowerCase();
// Display the human's name with age in dog years.
console.log(
    `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`,
);
