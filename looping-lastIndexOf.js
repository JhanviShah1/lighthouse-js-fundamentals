function lastIndexOf(myArray, value) {
    var x = -1;
    for (var i = 0; i < myArray.length; i++) {
        if (value === myArray[i]) {
            x = i;
        }

    }
    return x;
}
console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);