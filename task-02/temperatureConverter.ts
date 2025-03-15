// Input suhu dalam Fahrenheit
const fahrenheit: number = 98.6;

// Konversi ke Celsius: (°F - 32) × 5/9 = °C
const celsius: number = (fahrenheit - 32) * (5/9);

// Menampilkan hasil dengan 2 angka desimal
console.log(`${fahrenheit}°F = ${celsius.toFixed(2)}°C`); // Output: 98.6°F = 37.00°C