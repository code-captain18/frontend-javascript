# main.ts

This file demonstrates the use of TypeScript interfaces and DOM manipulation with Vanilla JavaScript.

## Features

- Defines a `Student` interface with `firstName`, `lastName`, `age`, and `location` properties.
- Creates two student objects and stores them in an array.
- Dynamically renders a table in the browser, displaying each student's first name and location.

## How to Use

1. Ensure TypeScript is installed in your project.
2. Compile the TypeScript file:
   ```bash
   npx tsc js/main.ts --outDir dist
   ```
3. Create an `index.html` file that includes the compiled JavaScript:
   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>Student Table</title>
     </head>
     <body>
       <script src="dist/main.js"></script>
     </body>
   </html>
   ```
4. Open `index.html` in your browser to view the table.

## Author

code-captain18
