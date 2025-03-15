// Input string
const mainString = "Hello world";
const searchString = "ell";

// Menghapus searchString dari mainString
const result = mainString.replace(searchString, '');

// Menampilkan hasil
console.log(`Original: "${mainString}"`); // Output: Original: "Hello world"
console.log(`After removing "${searchString}": "${result}"`); // Output: After removing "ell": "Ho world"
