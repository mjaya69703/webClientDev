# Task 01 - Basic JavaScript/TypeScript Programming

This repository contains solutions for basic programming tasks implemented in both JavaScript and TypeScript.

## Tasks Overview

1. **Rectangle Area Calculator**
   - Input: length = 5, width = 3
   - Output: 15
   - Files: `rectangleArea.js`, `rectangleArea.ts`

2. **Circle Properties Calculator**
   - Input: radius = 5
   - Output: 
     - diameter = 10
     - circumference = 31.4159
     - area = 78.539
   - Files: `circleProperties.js`, `circleProperties.ts`

3. **Triangle Angle Calculator**
   - Input: angle1 = 80, angle2 = 65
   - Output: 35 (third angle)
   - Files: `triangleAngle.js`, `triangleAngle.ts`

4. **Date Difference Calculator**
   - Input: date1 = 2024-03-19, date2 = 2024-03-21
   - Output: 2 (days)
   - Files: `dateDifference.js`, `dateDifference.ts`

5. **Name Initials Generator**
   - Input: "John Doe"
   - Output: "JD"
   - Files: `nameInitials.js`, `nameInitials.ts`

## How to Run

### JavaScript Files

1. Install Node.js if you haven't already: https://nodejs.org/en/download/
2. Open your terminal and navigate to the project directory
3. Run the JavaScript files using Node.js:
```bash
node rectangleArea.js
node circleProperties.js
node triangleAngle.js
node dateDifference.js
node nameInitials.js
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
npx ts-node rectangleArea.ts
npx ts-node circleProperties.ts
npx ts-node triangleAngle.ts
npx ts-node dateDifference.ts
npx ts-node nameInitials.ts
```

#### Method 2: Compile and Run
1. Install TypeScript if you haven't already:
```bash
npm install -g typescript
```

2. Compile TypeScript files to JavaScript:
```bash
tsc rectangleArea.ts
tsc circleProperties.ts
tsc triangleAngle.ts
tsc dateDifference.ts
tsc nameInitials.ts
```

3. Run the compiled JavaScript files:
```bash
node rectangleArea.js
node circleProperties.js
node triangleAngle.js
node dateDifference.js
node nameInitials.js
```

## Project Structure
```
task-01/
├── rectangleArea.js
├── rectangleArea.ts
├── circleProperties.js
├── circleProperties.ts
├── triangleAngle.js
├── triangleAngle.ts
├── dateDifference.js
├── dateDifference.ts
├── nameInitials.js
├── nameInitials.ts
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
