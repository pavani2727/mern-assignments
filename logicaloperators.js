let x = 10;
let y = 5;
let z = 15;

// AND (&&)
console.log("x > y && x < z:", x > y && x < z); // Output: true
// x > y (10 > 5) is true and x < z (10 < 15) is true, so the result is true.

// OR (||)
console.log("x < y || x < z:", x < y || x < z); // Output: true
// x < y (10 < 5) is false but x < z (10 < 15) is true, so the result is true.

// NOT (!)
console.log("!(x < y):", !(x < y)); // Output: true
// x < y (10 < 5) is false, so !(false) is true.