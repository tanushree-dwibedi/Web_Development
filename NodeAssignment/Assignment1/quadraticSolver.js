const readline = require('readline');

// Create an interface to take input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate roots of a quadratic equation
function findRoots(a, b, c) {
    let discriminant = b * b - 4 * a * c;

    console.log(`\nQuadratic Equation: ${a}x² + ${b}x + ${c} = 0`);
    console.log(`Discriminant (D): ${discriminant}`);

    if (discriminant > 0) {
        // Two distinct real roots
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(`Roots are real and distinct: Root1 = ${root1}, Root2 = ${root2}`);
    } else if (discriminant === 0) {
        // One real root (double root)
        let root = -b / (2 * a);
        console.log(`Roots are real and equal: Root = ${root}`);
    } else {
        // Complex roots
        let realPart = (-b / (2 * a)).toFixed(2);
        let imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2); // .toFix(2) fixes the decimal to 2 places
        console.log(`Roots are complex: Root1 = ${realPart} + ${imaginaryPart}i, Root2 = ${realPart} - ${imaginaryPart}i`);
    }
}

// Taking input from the user
/*
rl.question("Enter coefficient a: ", (a) => {
    rl.question("Enter coefficient b: ", (b) => {
        rl.question("Enter coefficient c: ", (c) => {
            // Convert input to numbers
            a = parseFloat(a);
            b = parseFloat(b);
            c = parseFloat(c);

            if (a === 0) {
                console.log("Not a quadratic equation (a should not be 0).");
            } else {
                findRoots(a, b, c);
            }

            rl.close();
        });
    });
});
*/

// Ask user for input
rl.question('Enter coefficient a: ', (a) => {
    rl.question('Enter coefficient b: ', (b) => {
      rl.question('Enter coefficient c: ', (c) => {
        findRoots(parseFloat(a), parseFloat(b), parseFloat(c));
        rl.close();
      });
    });
  });