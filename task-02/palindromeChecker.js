// Input string
const text = "madam";

// Proses pengecekan palindrome
const processed = text.toLowerCase().replace(/\s/g, '');
const reversed = processed.split('').reverse().join('');
const isPalindrome = processed === reversed;

// Menampilkan hasil
console.log(`"${text}" ${isPalindrome ? 'adalah' : 'bukan'} palindrome`); // Output: "madam" adalah palindrome