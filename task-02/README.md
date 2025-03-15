# Task 02 - Basic JavaScript/TypeScript Programming

This repository contains solutions for basic programming tasks implemented in both JavaScript and TypeScript.

## Tasks Overview

1. **Temperature Converter (Fahrenheit to Celsius)**
   - Input: fahrenheit = 98.6
   - Output: 98.6°F = 37.00°C
   - Files: `temperatureConverter.js`, `temperatureConverter.ts`

2. **Distance Converter (Centimeter to Kilometer)**
   - Input: cm = 100000
   - Output: 100000 cm = 1 km
   - Files: `distanceConverter.js`, `distanceConverter.ts`

3. **Number Checker (Even/Odd)**
   - Input: number = 1000
   - Output: 1000 adalah bilangan genap
   - Files: `numberChecker.js`, `numberChecker.ts`

4. **String Remover**
   - Input: 
     - mainString = "Hello world"
     - searchString = "ell"
   - Output: 
     - Original: "Hello world"
     - After removing "ell": "Ho world"
   - Files: `stringRemover.js`, `stringRemover.ts`

5. **Palindrome Checker**
   - Input: text = "madam"
   - Output: "madam" adalah palindrome
   - Files: `palindromeChecker.js`, `palindromeChecker.ts`

## How to Run

### JavaScript Files

1. Install Node.js if you haven't already: https://nodejs.org/en/download/
2. Open your terminal and navigate to the project directory
3. Run the JavaScript files using Node.js:
```bash
node temperatureConverter.js
node distanceConverter.js
node numberChecker.js
node stringRemover.js
node palindromeChecker.js
```

### TypeScript Files

There are two ways to run TypeScript files:

#### Method 1: Using ts-node (Recommended)
1. Install ts-node:
```bash
npm install -g ts-node
```

2. Run TypeScript files directly:
```bash
npx ts-node temperatureConverter.ts
npx ts-node distanceConverter.ts
npx ts-node numberChecker.ts
npx ts-node stringRemover.ts
npx ts-node palindromeChecker.ts
```

#### Method 2: Compile and Run
1. Install TypeScript if you haven't already:
```bash
npm install -g typescript
```

2. Compile TypeScript files to JavaScript:
```bash
tsc temperatureConverter.ts
tsc distanceConverter.ts
tsc numberChecker.ts
tsc stringRemover.ts
tsc palindromeChecker.ts
```

3. Run the compiled JavaScript files:
```bash
node temperatureConverter.js
node distanceConverter.js
node numberChecker.js
node stringRemover.js
node palindromeChecker.js
```

## Project Structure
```
task-02/
├── temperatureConverter.js
├── temperatureConverter.ts
├── distanceConverter.js
├── distanceConverter.ts
├── numberChecker.js
├── numberChecker.ts
├── stringRemover.js
├── stringRemover.ts
├── palindromeChecker.js
├── palindromeChecker.ts
└── README.md
```

## Requirements
- Node.js (18 or higher)
- TypeScript (for .ts files)
- Text editor (VS Code recommended)

## Notes
- All JavaScript files use ES5 syntax for better compatibility
- TypeScript files include type annotations for better code safety
- Each file contains example usage with the specified input and output
