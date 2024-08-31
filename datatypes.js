let myName = "pavani";          // Replace with your actual name
let myAge = 20;               // Replace with your actual age   
let myCity = "New York";      // Replace with your actual city
let isStudent = true;         // Replace with your actual student status (true/false)
let emptyValue = null;        // A null value
let notDefinedValue;               // An undefined value
let mixedValue = {
    text: "Hello",
    number: 42,
    isTrue: true
};

// Output the value of mixedValue to the console
console.log("mixedValue contains:", mixedValue);
console.log("The data type of mixedValue is:", typeof mixedValue);

// Print the data type of each variable
console.log("The data type of myName is:", typeof myName);           // string
console.log("The data type of myAge is:", typeof myAge);             // number
console.log("The data type of myCity is:", typeof myCity);           // string
console.log("The data type of isStudent is:", typeof isStudent);     // boolean
console.log("The data type of emptyValue is:", typeof emptyValue);   // object (null is considered an object in JavaScript)
console.log("The data type of notDefined is:", typeof notDefined);   // undefined