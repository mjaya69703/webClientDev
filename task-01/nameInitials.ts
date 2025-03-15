// Get name initials
const fullName: string = "John Doe";
const initials: string = fullName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('');

console.log(`Initials: ${initials}`); // Output: JD 