// Input suhu dalam Fahrenheit
const fahrenheit = 98.6;

// Konversi ke Celsius: (°F - 32) × 5/9 = °C
const celsius = (fahrenheit - 32) * (5/9);

// Menampilkan hasil dengan 2 angka desimal
console.log(`${fahrenheit}°F = ${celsius.toFixed(2)}°C`);

function fahrenheitToCelsius(fahrenheit) {
    // Formula: (°F - 32) × 5/9 = °C
    const celsius = (fahrenheit - 32) * (5/9);
    return celsius.toFixed(2);
}

// Contoh penggunaan
console.log(fahrenheitToCelsius(98.6)); // Output: 37.00
console.log(fahrenheitToCelsius(32));   // Output: 0.00 