function QuadraticSolver() {
    let a = 9;
    let b = 100;
    let c = 2;
    let d = Math.sqrt((b * b) - 4 * a * c);
    let x, y;

    if (d > 0 || d === 0) {
        x = (-1 * b + d) / (2 * a);
        y = (-1 * b - d) / (2 * a);
    } else {
        console.log("There is no real root");
    }

    return { x, y };
}

console.log("The solution is!!");
let { x, y } = QuadraticSolver();
console.log(`x: ${x}, y: ${y}`);
