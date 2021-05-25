const vegetables = [{
        submitter: 'Old Man Franklin',
        redness: 10,
        plumpness: 5
    },
    {
        submitter: 'Sally Tomato-Grower',
        redness: 2,
        plumpness: 8
    },
    {
        submitter: 'Hamid Hamidson',
        redness: 4,
        plumpness: 3
    }
]

const metric = 'redness'

const judgeVegetable = function(vegetables, metric) {
    var value = 0;
    var vendor = '';
    for (var i = 0; i < vegetables.length; i++) {
        if (metric === 'redness') {
            if (vegetables[i].redness > value) {
                value = vegetables[i].redness;
                vendor = vegetables[i].submitter;
            }
        } else if (metric === "plumpness") {
            if (vegetables[i].plumpness > value) {
                value = vegetables[i].plumpness;
                vendor = vegtables[i].submitter;
            }
        } else if (metric === 'd') {
            if (vegetable[i].d > value) {
                value = vegetables[i].d;
                vendor = vegetables[i].submitter;
            }
        }
    }
    return vendor
}
console.log(judgeVegetable(vegetables, metric));