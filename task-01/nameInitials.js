// Get name initials
var fullName = "John Doe";
var initials = fullName
    .split(' ')
    .map(function(word) { return word.charAt(0).toUpperCase(); })
    .join('');

console.log("Initials: " + initials); // Output: JD 