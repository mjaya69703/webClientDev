// Input string
const text: string = "madam";

// Proses pengecekan palindrome
const processed: string = text.toLowerCase().replace(/\s/g, '');
const reversed: string = processed.split('').reverse().join('');
const isPalindrome: boolean = processed === reversed;

// Menampilkan hasil
console.log(`"${text}" ${isPalindrome ? 'adalah' : 'bukan'} palindrome`); // Output: "madam" adalah palindrome