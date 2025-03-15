// Calculate difference between dates
var date1 = new Date("2024-03-19");
var date2 = new Date("2024-03-21");
var diffTime = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

console.log("Difference in days: " + diffDays); // Output: 2 