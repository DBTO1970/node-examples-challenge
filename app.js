const rect = {
    perimeter: (x, y) => 2 * (x + y),
    area: (x, y) => x * y
};

function solveRect(l,w) {
    console.log(`Solving for rectangle with dimensions ${l}, ${w}`);

    if(l <= 0 || w <= 0) {
        console.log(`Rectangle dimensions must be greater that zer.  Received: ${l}, ${w}`);
    } else {
        console.log(`Area of rectangle ${l}, ${w}: ${rect.area(l, w)}`);
        console.log(`Perimeter of rectangle ${l}, ${w}: ${rect.perimeter(l, w)}`);
    }
};

solveRect(4, 7);
solveRect(1, -6);
solveRect(2, 28);
solveRect(-3, 10);