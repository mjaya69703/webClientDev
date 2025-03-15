// Calculate difference between dates
const date1: Date = new Date("2024-03-19");
const date2: Date = new Date("2024-03-21");
const diffTime: number = Math.abs(date2.getTime() - date1.getTime());
const diffDays: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

console.log(`Difference in days: ${diffDays}`); // Output: 2 