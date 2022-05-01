let arrayL = [1, 2, 10, 5, 4, 8, 44];
let max1 = Math.max(...arrayL);
arrayL.splice(arrayL.indexOf(max1), 1);
let max2 = Math.max(...arrayL);

console.log(max2);
