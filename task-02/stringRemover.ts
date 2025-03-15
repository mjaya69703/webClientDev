// Input string
const mainString: string = "Hello world";
const searchString: string = "ell";

// Menghapus searchString dari mainString
const result: string = mainString.replace(searchString, '');

// Menampilkan hasil
console.log(`Original: "${mainString}"`); // Output: Original: "Hello world"
console.log(`After removing "${searchString}": "${result}"`); // Output: After removing "ell": "Ho world"
