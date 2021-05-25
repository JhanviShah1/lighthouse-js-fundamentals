function range(start, end, step) {
    var newArray = [];
    if (start != null || end != nullstep != null) {
        if (start < end || step > 0) {

            for (i = start; i <= end; i = i + step) {
                newArray.push(start[i]);

            }

        }
        return (newArray);
    } else {
        return [];
    }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

function range(start, end, step) {
    let newArray = [];
    if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
        return [];
    } else {
        for (i = start; i <= end; i = i + step) {
            newArray.push(i);

        }
    }

    return (newArray);

}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));