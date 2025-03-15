// Input dalam centimeter
const cm = 100000;

// Konversi ke kilometer
const km = cm / 100000;

// Menampilkan hasil
console.log(`${cm} cm = ${km} km`);

function centimeterToKilometer(cm) {
    const km = cm / 100000;
    return km + " km";
}

// Contoh penggunaan
console.log(centimeterToKilometer(100000)); // Output: "1 km"
console.log(centimeterToKilometer(250000)); // Output: "2.5 km" 