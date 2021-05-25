const bins = { waste: 9, compost: 10, recycling: 8 };

const smartGarbage = function(trash, bins) {
    if (trash === "recycling") {
        bins.recycling += 1;
    } else if (trash === "waste") {
        bins.waste += 1;
    } else if (trash === "compost") {
        bins.compost += 1;
    }
    return bins
};

console.log(smartGarbage('recycling', bins));