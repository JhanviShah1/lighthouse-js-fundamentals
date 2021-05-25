const sumLargestNumbers = function(data) {
    var value = 0;
    var total;
    var secNum;
    for (i = 0; i < data.length; i++) {
        if (data[i] > value) {
            secNum = value;
            value = data[i];
            total = secNum + value;
        }

    }
    return total;
};
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));