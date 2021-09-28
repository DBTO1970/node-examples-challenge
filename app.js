const rect = require('./rectancle');

function solveRect(l,w) {
    console.log(`Solving for rectangle with dimensions ${l}, ${w}`);

    rect(l, w, (err, rectangle) => {
        if (err) {
            console.log('ERROR:', err.message)
        } else {
            console.log(`Area of rectangle with dimensions ${l}, ${w}: ${rectangle.area()}`);
            console.log(`Perimeter of rectangle with dimensions ${l}, ${w}: ${rectangle.perimeter()}`);
        }
    });
    console.log('This statement is logged after the call to rect()');
        
}

solveRect(4, 7);
solveRect(1, -6);
solveRect(2, 28);
solveRect(-3, 10);